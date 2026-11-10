/** Alertes de démonstration (aucun envoi réel). Données et horloge injectées. */
export function createAlertService({ seed = [], now = () => new Date(), locale = 'fr-FR' } = {}) {
  let alerts = [...seed]
  let counter = 1043
  return {
    list: () => [...alerts],
    create() {
      const alert = {
        id: `MK-${counter++}`,
        type: 'Alerte SOS simulée',
        time: now().toLocaleString(locale, { dateStyle: 'medium', timeStyle: 'short' }),
        status: 'Simulation terminée',
        location: 'Position fictive — Gabès, Tunisie',
        isDemo: true,
      }
      alerts = [alert, ...alerts]
      return alert
    },
    clear() { alerts = [] },
    reset() { alerts = [...seed] },
  }
}
