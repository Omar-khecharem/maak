import { escapeHtml } from '../../core/dom.js'
export function sectionHeading({ eyebrow, title, linkLabel, linkPage }) {
  return `<div class="mb-4 flex items-end justify-between gap-3">
    <div>${eyebrow ? `<p class="text-sm font-bold text-[#be185d]">${escapeHtml(eyebrow)}</p>` : ''}<h2 class="mt-1 text-2xl font-black">${escapeHtml(title)}</h2></div>
    ${linkLabel ? `<button class="text-sm font-bold text-[#be185d]" data-page="${escapeHtml(linkPage)}">${escapeHtml(linkLabel)}</button>` : ''}
  </div>`
}
