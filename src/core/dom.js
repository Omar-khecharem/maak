/** Utilitaires DOM sans état. */
const ENTITIES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }

export const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, c => ENTITIES[c])

/** Fabrique d'élément : h('div', 'classe', 'texte'). Le texte est inséré via textContent (sûr). */
export function h(tag, className = '', text) {
  const node = document.createElement(tag)
  if (className) node.className = className
  if (text != null) node.textContent = text
  return node
}
