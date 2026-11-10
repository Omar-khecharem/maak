import test from 'node:test'
import assert from 'node:assert/strict'
import { createStore } from '../src/core/store.js'
import { escapeHtml } from '../src/core/dom.js'
import { createStorageService } from '../src/services/storage-service.js'
import { createContactService } from '../src/services/contact-service.js'
import { createAlertService } from '../src/services/alert-service.js'
import { createQuizService, createInitialQuizState } from '../src/services/quiz-service.js'
import { createPreferencesService } from '../src/services/preferences-service.js'
import { createBotReplyService } from '../src/services/bot-reply-service.js'
import { createVoiceRecorder } from '../src/services/voice-recorder.js'
import { mockQuiz } from '../src/data/mock-quiz.js'

// Object.keys(backend) doit lister uniquement les clés de données : on masque les méthodes.
const makeStorage = () => {
  const store = new Map()
  const backend = {
    getItem: k => store.get(k) ?? null,
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: k => store.delete(k),
  }
  Object.defineProperty(backend, 'x', { enumerable: false, value: 1 })
  return { storage: createStorageService({ backend: new Proxy(backend, { ownKeys: () => [...store.keys()], getOwnPropertyDescriptor: (t, k) => ({ enumerable: true, configurable: true, value: t[k] }) }) }), store }
}

test('escapeHtml neutralise le HTML', () => {
  assert.equal(escapeHtml('<img src=x onerror="a">&\''), '&lt;img src=x onerror=&quot;a&quot;&gt;&amp;&#39;')
})

test('store notifie les abonnés et reste immuable', () => {
  const store = createStore({ a: 1 })
  const seen = []
  const off = store.subscribe(s => seen.push(s.a))
  const before = store.get()
  store.set({ a: 2 })
  store.set(s => ({ a: s.a + 1 }))
  off()
  store.set({ a: 99 })
  assert.deepEqual(seen, [2, 3])
  assert.equal(before.a, 1)
})

test('storage : lecture, écriture, valeur par défaut, effacement', () => {
  const { storage } = makeStorage()
  assert.equal(storage.get('x', 'def'), 'def')
  storage.set('x', { n: 1 })
  assert.deepEqual(storage.get('x'), { n: 1 })
  storage.remove('x')
  assert.equal(storage.get('x'), null)
})

test('contacts : ajout, validation, bascule, persistance, reset', () => {
  const { storage } = makeStorage()
  const seed = [{ id: 1, name: 'A B', relation: 'x', phone: '1', initials: 'AB', receivesAlerts: true }]
  const svc = createContactService({ storage, seed, idFactory: () => 42 })
  assert.equal(svc.list().length, 1)
  assert.equal(svc.add({ name: '   ' }), null)
  const c = svc.add({ name: 'sana trabelsi' })
  assert.equal(c.initials, 'ST')
  assert.equal(c.relation, 'Personne de confiance')
  assert.equal(svc.list().length, 2)
  svc.toggleAlerts(1)
  assert.equal(svc.list()[0].receivesAlerts, false)
  assert.equal(createContactService({ storage, seed }).list().length, 2)
  svc.reset()
  assert.equal(svc.list().length, 1)
})

test('alertes : création, vidage, reset', () => {
  const svc = createAlertService({ seed: [{ id: 'a' }], now: () => new Date('2026-01-02T10:00:00Z') })
  const alert = svc.create()
  assert.ok(alert.id.startsWith('MK-'))
  assert.equal(svc.list().length, 2)
  svc.clear()
  assert.equal(svc.list().length, 0)
  svc.reset()
  assert.equal(svc.list().length, 1)
})

test('quiz : filtre par âge et correction', () => {
  const svc = createQuizService(mockQuiz)
  assert.equal(svc.list('all').length, mockQuiz.length)
  assert.ok(svc.list(svc.ages[0]).every(q => q.age === svc.ages[0]))
  assert.equal(svc.isCorrect(mockQuiz[0], mockQuiz[0].correctIndex), true)
  assert.equal(svc.isCorrect(mockQuiz[0], 99), false)
  assert.deepEqual(createInitialQuizState(), { age: 'all', index: 0, score: 0, selected: null })
})

test('préférences : langue valide uniquement', () => {
  const { storage } = makeStorage()
  const prefs = createPreferencesService({ storage })
  assert.equal(prefs.getLanguage(), 'fr')
  assert.equal(prefs.setLanguage('xx'), false)
  assert.equal(prefs.setLanguage('ar'), true)
  assert.equal(prefs.getLanguage(), 'ar')
})

test('bot : réponse déterministe avec random injecté', () => {
  const bot = createBotReplyService({ replies: ['a', 'b', 'c'], random: () => 0.99 })
  assert.equal(bot.reply(), 'c')
})

// ---- Enregistreur vocal avec faux MediaRecorder ----
function fakeEnv({ deny = false } = {}) {
  class FakeRecorder {
    constructor() { this.state = 'inactive'; this.mimeType = 'audio/webm' }
    start() { this.state = 'recording' }
    stop() { this.state = 'inactive'; this.ondataavailable?.({ data: new Blob(['abc']) }); this.onstop?.() }
  }
  let stopped = 0
  const track = { stop: () => stopped++ }
  return {
    Recorder: FakeRecorder,
    mediaDevices: { getUserMedia: async () => { if (deny) throw new Error('no'); return { getTracks: () => [track] } } },
    stopped: () => stopped,
  }
}

test('recorder : non supporté / refusé', async () => {
  await assert.rejects(createVoiceRecorder({ mediaDevices: null, Recorder: null }).start(), { code: 'unsupported' })
  const env = fakeEnv({ deny: true })
  await assert.rejects(createVoiceRecorder(env).start(), { code: 'denied' })
})

test('recorder : enregistrement complet libère le micro et renvoie le blob', async t => {
  t.mock.timers.enable({ apis: ['setInterval', 'Date'] })
  const env = fakeEnv()
  const rec = createVoiceRecorder(env)
  const events = []
  await rec.start({ onEnd: () => events.push('end'), onComplete: r => events.push(['done', r.blob.size > 0]) })
  assert.equal(rec.isRecording(), true)
  t.mock.timers.tick(1500)
  rec.stop()
  assert.deepEqual(events, ['end', ['done', true]])
  assert.equal(env.stopped(), 1)
  assert.equal(rec.isRecording(), false)
})

test('recorder : annulation ne produit aucun vocal', async t => {
  t.mock.timers.enable({ apis: ['setInterval', 'Date'] })
  const env = fakeEnv()
  const rec = createVoiceRecorder(env)
  const events = []
  await rec.start({ onEnd: () => events.push('end'), onComplete: () => events.push('done') })
  t.mock.timers.tick(2000)
  rec.cancel()
  assert.deepEqual(events, ['end'])
  assert.equal(env.stopped(), 1)
})
