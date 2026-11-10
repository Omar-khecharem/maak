import { h } from '../../core/dom.js'
import { formatDuration } from '../../core/format.js'

/** Construit la bulle d'un message texte ou vocal. */
export function createChatMessage(message) {
  const bubble = h('div', `chat-msg chat-msg--${message.type}`)
  bubble.setAttribute('role', 'listitem')
  if (message.audioUrl) {
    bubble.classList.add('chat-msg--voice')
    const audio = h('audio')
    audio.controls = true
    audio.preload = 'metadata'
    audio.src = message.audioUrl
    bubble.append(h('span', 'chat-voice-label', `Message vocal · ${formatDuration(message.duration)}`), audio)
  } else {
    bubble.textContent = message.content
  }
  return bubble
}
