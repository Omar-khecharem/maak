import { escapeHtml } from '../../core/dom.js'
import { icon } from '../ui/icons.js'

function navButton(item, active) {
  const target = item.page ? `data-page="${escapeHtml(item.page)}"` : `data-action="${escapeHtml(item.action)}"`
  return `<button type="button" class="nav-item${item.variant === 'chat' ? ' chat-btn' : ''}${active ? ' is-active' : ''}" ${target} aria-label="${escapeHtml(item.label)}"${active ? ' aria-current="page"' : ''}>
    <span class="nav-bubble">${icon(item.icon, { size: 22, className: 'nav-icon' })}</span>
    <span class="nav-label">${escapeHtml(item.label.toUpperCase())}</span>
  </button>`
}

/** bottomNav({ items, isActive: item => boolean }) — aucune connaissance des pages. */
export const bottomNav = ({ items, isActive }) =>
  `<nav class="bottom-nav" aria-label="Navigation principale"><div class="bottom-nav-inner">${items.map(i => navButton(i, isActive(i))).join('')}</div></nav>`
