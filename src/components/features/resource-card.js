import { escapeHtml } from '../../core/dom.js'
import { badge } from '../ui/badge.js'
import { card } from '../ui/card.js'

const TILE_ICONS = ['♡', '⌘', '☼']

/** Variante 'tile' (accueil, avec icône) ou 'plain' (profil, avec badge). */
export function resourceCard(resource, { variant = 'plain', index = 0 } = {}) {
  const head = variant === 'tile'
    ? `<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fce7f3] text-lg text-[#be185d]">${TILE_ICONS[index % TILE_ICONS.length]}</div>
       <p class="mt-4 text-xs font-extrabold uppercase tracking-wider text-[#be185d]">${escapeHtml(resource.category)}</p>`
    : badge(resource.category)
  return card(`${head}
    <h3 class="mt-3 font-extrabold">${escapeHtml(resource.title)}</h3>
    <p class="mt-2 text-sm leading-6 text-[#9b6b82]">${escapeHtml(resource.description)}</p>
    <p class="mt-3 text-xs text-[#a67b90]">${escapeHtml(resource.readTime)} de lecture</p>`)
}
