/** Action partagée (accueil + alertes) : crée une alerte fictive. */
export function triggerDemoAlert(_element, ctx) {
  ctx.services.alerts.create()
  ctx.toast('Alerte de démonstration créée — aucune notification n’a été envoyée.')
  if (ctx.store.get().page === 'alerts') ctx.refresh()
}
