import { escapeHtml } from '../../core/dom.js'
export const quizFeedback = ({ correct, explanation }) =>
  `<div class="mt-4 rounded-xl p-4 text-sm leading-6 ${correct ? 'bg-[#fce7f3] text-[#9d174d]' : 'bg-[#fff4e2] text-[#805b1d]'}" aria-live="polite"><strong>${correct ? 'Bonne réponse !' : 'Ce n’est pas la meilleure réponse.'}</strong><br>${escapeHtml(explanation)}</div>`
