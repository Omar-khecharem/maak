import { escapeHtml } from '../../core/dom.js'

/** En-tête de page. `actionHtml` et `titleSuffix` sont du HTML déjà sûr fourni par l'appelant. */
export function pageHeader({ eyebrow, title, subtitle, actionHtml = '', titleSuffix = '' }) {
  return `<div class="flex flex-wrap items-end justify-between gap-3">
    <div>
      <p class="eyebrow">${escapeHtml(eyebrow)}</p>
      <h1 class="page-title mt-2 text-3xl font-black sm:text-4xl">${escapeHtml(title)}${titleSuffix}</h1>
      ${subtitle ? `<p class="mt-2 text-[#9b6b82]">${escapeHtml(subtitle)}</p>` : ''}
    </div>
    ${actionHtml}
  </div>`
}
