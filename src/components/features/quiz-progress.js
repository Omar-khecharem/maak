import { badge } from '../ui/badge.js'
export const quizProgress = ({ category, index, total }) => `<div class="bg-[#fce7f3] px-5 py-5 sm:px-8">
  <div class="flex items-center justify-between gap-3">${badge(category)}<span class="text-sm font-bold text-[#be185d]">Question ${index + 1} / ${total}</span></div>
  <div class="mt-4 h-2 overflow-hidden rounded-full bg-white"><div class="h-full rounded-full bg-[#be185d] transition-all" style="width:${((index + 1) / total) * 100}%"></div></div>
</div>`
