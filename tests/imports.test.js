import test from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const walk = dir => readdirSync(dir).flatMap(f => {
  const p = join(dir, f)
  return statSync(p).isDirectory() ? walk(p) : p.endsWith('.js') ? [p] : []
})

test('tous les modules (hors main.js) se résolvent et s’importent', async () => {
  const files = walk(resolve('src')).filter(f => !f.endsWith('main.js'))
  for (const file of files) await import(pathToFileURL(file).href)
  assert.ok(files.length > 40)
})

test('les pages respectent le même contrat (Liskov)', async () => {
  const { createHomePage } = await import('../src/pages/home.js')
  const { createGamePage } = await import('../src/pages/game.js')
  const { createAlertsPage } = await import('../src/pages/alerts.js')
  const { createProfilePage } = await import('../src/pages/profile.js')
  const deps = { user: { name: 'x', firstName: 'x', initials: 'X' }, resources: [] }
  for (const page of [createHomePage(deps), createGamePage(), createAlertsPage(), createProfilePage(deps)]) {
    assert.equal(typeof page.id, 'string')
    assert.equal(typeof page.render, 'function')
    assert.ok(Array.isArray(page.watch))
  }
})
