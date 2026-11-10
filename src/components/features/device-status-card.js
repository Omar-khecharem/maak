import { escapeHtml } from '../../core/dom.js'
import { badge } from '../ui/badge.js'
import { card } from '../ui/card.js'

export const deviceStatusCard = ({ name, status, battery }) => card(`
  <div class="flex items-center justify-between gap-3"><h2 class="font-extrabold">État du dispositif</h2>${badge('Simulation', 'gray')}</div>
  <div class="mt-5 flex items-center gap-4">
    <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fce7f3] text-2xl">⌁</div>
    <div class="flex-1"><p class="font-bold">${escapeHtml(name)}</p><p class="mt-1 text-sm text-[#9b6b82]">${escapeHtml(status)}</p></div>
  </div>
  <div class="mt-5 rounded-xl bg-[#fff5f9] p-3 text-sm text-[#9b6b82]">Batterie : <strong class="text-[#4a1d36]">${Number(battery)} % fictif</strong>
    <div class="mt-2 h-2 overflow-hidden rounded-full bg-[#f9d5e5]"><div class="h-full rounded-full bg-[#ec4899]" style="width:${Number(battery)}%"></div></div>
  </div>`)
