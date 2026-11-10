import { escapeHtml } from '../../core/dom.js'
import { badge } from '../ui/badge.js'
import { card } from '../ui/card.js'

export const alertCard = alert => card(`
  <div class="flex flex-wrap items-start justify-between gap-3">
    <div class="flex items-start gap-3">
      <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fce7f3] text-xl text-[#be185d]">↗</div>
      <div><p class="font-bold">${escapeHtml(alert.type)}</p><p class="mt-1 text-sm text-[#9b6b82]">${escapeHtml(alert.time)}</p></div>
    </div>
    ${badge(alert.status, 'amber')}
  </div>
  <div class="mt-4 rounded-xl bg-[#fff5f9] p-3 text-sm text-[#8c5d75]">⌖ ${escapeHtml(alert.location)}</div>
  <p class="mt-3 text-xs font-semibold text-[#9a6a20]">DÉMONSTRATION — aucune notification n’a été envoyée.</p>`, 'p-4 sm:p-5')
