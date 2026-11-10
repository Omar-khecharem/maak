import { escapeHtml } from '../../core/dom.js'
export const badge = (text, variant = 'green') =>
  `<span class="badge badge-${variant}">${escapeHtml(text)}</span>`
