/** Persistance clé/valeur. Le backend est injecté (localStorage par défaut). */
export function createStorageService({ prefix = 'maak-demo-v2', backend = globalThis.localStorage } = {}) {
  const k = key => `${prefix}:${key}`
  const safe = (fn, fallback) => { try { return fn() } catch { return fallback } }
  return {
    get: (key, fallback = null) => safe(() => {
      const raw = backend.getItem(k(key))
      return raw == null ? fallback : JSON.parse(raw)
    }, fallback),
    set: (key, value) => safe(() => backend.setItem(k(key), JSON.stringify(value))),
    remove: key => safe(() => backend.removeItem(k(key))),
    clearAll: () => safe(() => Object.keys(backend).filter(x => x.startsWith(`${prefix}:`)).forEach(x => backend.removeItem(x))),
  }
}
