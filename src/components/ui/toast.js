/** Notification temporaire. Reçoit l'élément à piloter (pas de sélecteur global). */
export function createToast(el, duration = 3500) {
  let timer = null
  el.className = 'toast'
  el.hidden = true
  el.setAttribute('role', 'status')
  el.setAttribute('aria-live', 'polite')
  return {
    show(message) {
      el.textContent = message
      el.hidden = false
      clearTimeout(timer)
      timer = setTimeout(() => { el.hidden = true }, duration)
    },
  }
}
