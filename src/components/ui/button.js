import { escapeHtml } from '../../core/dom.js'

/** button({ label, action, variant: 'primary'|'soft', data: { id: 3 } }) */
export function button({ label, action, variant = 'primary', className = '', data = {}, type = 'button' }) {
  const dataAttrs = Object.entries(data).map(([k, v]) => ` data-${k}="${escapeHtml(v)}"`).join('')
  return `<button type="${type}" class="btn-${variant} ${className}" data-action="${escapeHtml(action)}"${dataAttrs}>${escapeHtml(label)}</button>`
}
