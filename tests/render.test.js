import test from 'node:test'
import assert from 'node:assert/strict'
import { createStore } from '../src/core/store.js'
import { createStorageService } from '../src/services/storage-service.js'
import { createAlertService } from '../src/services/alert-service.js'
import { createContactService } from '../src/services/contact-service.js'
import { createPreferencesService } from '../src/services/preferences-service.js'
import { createQuizService, createInitialQuizState } from '../src/services/quiz-service.js'
import { mockAlerts } from '../src/data/mock-alerts.js'
import { mockContacts } from '../src/data/mock-contacts.js'
import { mockQuiz } from '../src/data/mock-quiz.js'
import { mockResources } from '../src/data/mock-resources.js'
import { mockUser } from '../src/data/mock-user.js'
import { createHomePage } from '../src/pages/home.js'
import { createGamePage } from '../src/pages/game.js'
import { createAlertsPage } from '../src/pages/alerts.js'
import { createProfilePage } from '../src/pages/profile.js'
import { bottomNav } from '../src/components/layout/bottom-nav.js'
import { navigationItems } from '../src/config/navigation.js'

const backend = { getItem: () => null, setItem() {}, removeItem() {} }
const storage = createStorageService({ backend })
const services = {
  storage,
  alerts: createAlertService({ seed: mockAlerts }),
  contacts: createContactService({ storage, seed: mockContacts }),
  preferences: createPreferencesService({ storage }),
  quiz: createQuizService(mockQuiz),
}
const makeCtx = quiz => ({ store: createStore({ page: 'x', quiz }), services, toast() {}, refresh() {} })

test('chaque page génère du HTML sans valeur « undefined »', () => {
  const deps = { user: mockUser, resources: mockResources }
  const ctx = makeCtx(createInitialQuizState())
  for (const page of [createHomePage(deps), createGamePage(), createAlertsPage(), createProfilePage(deps)]) {
    const html = page.render(ctx)
    assert.ok(html.length > 200, page.id)
    assert.ok(!html.includes('undefined') && !html.includes('[object'), `${page.id} contient une valeur invalide`)
  }
})

test('le quiz progresse via les actions de la page (réponse, suivant, fin, rejouer)', () => {
  const page = createGamePage()
  const ctx = makeCtx(createInitialQuizState())
  const total = mockQuiz.length
  for (let i = 0; i < total; i++) {
    const q = mockQuiz[i]
    page.actions.answer({ dataset: { value: String(q.correctIndex) } }, ctx)
    page.actions.answer({ dataset: { value: '0' } }, ctx) // double clic ignoré
    page.actions.next({}, ctx)
  }
  const { quiz } = ctx.store.get()
  assert.equal(quiz.score, total)
  assert.match(page.render(ctx), /TON SCORE/)
  page.actions.restart({}, ctx)
  assert.equal(ctx.store.get().quiz.index, 0)
})

test('la navigation marque une seule entrée active', () => {
  const html = bottomNav({ items: navigationItems, isActive: i => i.page === 'home' })
  assert.equal((html.match(/is-active/g) || []).length, 1)
})
