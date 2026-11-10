import { button } from '../ui/button.js'
export const quizResult = ({ score, total }) => `<div class="card px-6 py-10 text-center sm:px-10">
  <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fce7f3] text-4xl text-[#be185d]">★</div>
  <p class="mt-5 text-sm font-bold text-[#be185d]">TON SCORE</p>
  <p class="mt-1 text-5xl font-black">${Number(score)}<span class="text-2xl text-[#9b6b82]">/${Number(total)}</span></p>
  <p class="mx-auto mt-4 max-w-md text-[#9b6b82]">Tu peux rejouer pour apprendre d’autres façons de respecter les limites, de soutenir les autres et de demander de l’aide.</p>
  ${button({ label: 'Rejouer', action: 'restart', className: 'mt-6' })}
</div>`
