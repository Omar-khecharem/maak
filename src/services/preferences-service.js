const KEY = 'language'
export function createPreferencesService({ storage, supported = ['fr', 'ar'] } = {}) {
  return {
    getLanguage: () => storage.get(KEY, 'fr'),
    setLanguage(value) {
      if (!supported.includes(value)) return false
      storage.set(KEY, value)
      return true
    },
    reset: () => storage.remove(KEY),
  }
}
