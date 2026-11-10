/** Contacts de confiance : lecture, ajout, activation. Persistance injectée. */
const KEY = 'contacts'
const makeInitials = name => name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase()

export function createContactService({ storage, seed = [], idFactory = Date.now } = {}) {
  const load = () => storage.get(KEY) ?? seed.map(c => ({ ...c }))
  const save = list => { storage.set(KEY, list); return list }
  return {
    list: load,
    add({ name, relation, phone }) {
      const clean = String(name ?? '').trim()
      if (!clean) return null
      const contact = {
        id: idFactory(),
        name: clean,
        relation: relation?.trim() || 'Personne de confiance',
        phone: phone?.trim() || 'Numéro fictif',
        initials: makeInitials(clean),
        receivesAlerts: false,
      }
      save([...load(), contact])
      return contact
    },
    toggleAlerts(id) {
      return save(load().map(c => (c.id === id ? { ...c, receivesAlerts: !c.receivesAlerts } : c)))
    },
    reset: () => storage.remove(KEY),
  }
}
