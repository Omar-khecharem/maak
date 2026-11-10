import { escapeHtml } from '../../core/dom.js'
import { badge } from '../ui/badge.js'
import { button } from '../ui/button.js'

/** Variante lecture seule (accueil) ou gérable (profil). */
export function contactCard(contact, { manageable = false } = {}) {
  const subtitle = manageable ? `${contact.relation} · ${contact.phone}` : contact.relation
  const trailing = manageable
    ? button({ label: contact.receivesAlerts ? 'Activé' : 'Désactivé', action: 'toggle-contact', variant: 'soft', className: 'text-xs', data: { id: contact.id } })
    : badge(contact.receivesAlerts ? 'Alerte test' : 'Inactif', contact.receivesAlerts ? 'green' : 'gray')
  return `<article class="flex items-center gap-3 rounded-2xl border border-[#f9d5e5] p-3">
    <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fce7f3] font-bold text-[#be185d]">${escapeHtml(contact.initials)}</div>
    <div class="min-w-0 flex-1"><p class="truncate font-bold">${escapeHtml(contact.name)}</p><p class="text-sm text-[#9b6b82]">${escapeHtml(subtitle)}</p></div>
    ${trailing}
  </article>`
}
