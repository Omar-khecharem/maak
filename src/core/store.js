/**
 * Store minimal et observable (état immuable).
 * Responsabilité unique : conserver l'état et notifier les abonnés.
 */
export function createStore(initialState = {}) {
  let state = { ...initialState }
  const subscribers = new Set()

  return {
    get: () => state,
    set(patch) {
      const next = typeof patch === 'function' ? patch(state) : patch
      state = { ...state, ...next }
      subscribers.forEach(fn => fn(state))
    },
    subscribe(fn) {
      subscribers.add(fn)
      return () => subscribers.delete(fn)
    },
  }
}
