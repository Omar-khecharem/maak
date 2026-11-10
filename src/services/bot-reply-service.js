/** Stratégie de réponse du bot (remplaçable par une vraie IA sans toucher à l'UI). */
export function createBotReplyService({ replies, delay = 800, random = Math.random } = {}) {
  return {
    delay,
    reply: () => replies[Math.floor(random() * replies.length)],
  }
}
