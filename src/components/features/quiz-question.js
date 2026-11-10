import { escapeHtml } from '../../core/dom.js'
import { quizFeedback } from './quiz-feedback.js'
import { button } from '../ui/button.js'

export function quizQuestion({ question, selected, isCorrect, isLast }) {
  const answered = selected !== null
  const options = question.options.map((option, i) => {
    const state = !answered ? '' : i === question.correctIndex ? ' correct' : i === selected ? ' wrong' : ''
    return `<button class="choice${state}" data-action="answer" data-value="${i}" ${answered ? 'disabled' : ''}>
      <span class="mr-3 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#fce7f3] text-sm font-bold text-[#be185d]">${String.fromCharCode(65 + i)}</span>${escapeHtml(option)}</button>`
  }).join('')
  return `<div class="p-5 sm:p-8">
    <p class="text-sm font-bold text-[#be185d]">${escapeHtml(question.age)}</p>
    <h2 class="mt-3 text-xl font-extrabold leading-8 sm:text-2xl">${escapeHtml(question.scenario)}</h2>
    <div class="mt-6 space-y-3">${options}</div>
    ${answered ? quizFeedback({ correct: isCorrect, explanation: question.explanation }) : ''}
    ${answered ? button({ label: isLast ? 'Voir mon résultat' : 'Question suivante', action: 'next', className: 'mt-5 w-full sm:w-auto' }) : ''}
  </div>`
}
