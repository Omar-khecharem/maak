import { escapeHtml } from '../../core/dom.js'
export const emptyState = ({ title, text }) =>
  `<div class="card px-6 py-12 text-center"><div class="text-4xl">🌸</div><h2 class="mt-3 text-lg font-extrabold">${escapeHtml(title)}</h2><p class="mt-2 text-sm text-[#9b6b82]">${escapeHtml(text)}</p></div>`
