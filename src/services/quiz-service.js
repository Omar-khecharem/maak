/** Règles du quiz (pures, sans DOM). */
export const createInitialQuizState = (age = 'all') => ({ age, index: 0, score: 0, selected: null })

export function createQuizService(questions) {
  const ages = [...new Set(questions.map(q => q.age))]
  return {
    ages,
    list: age => (age === 'all' ? questions : questions.filter(q => q.age === age)),
    isCorrect: (question, answerIndex) => answerIndex === question.correctIndex,
  }
}
