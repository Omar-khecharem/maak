import { h } from '../../core/dom.js'

export function createChatHeader({ onClose }) {
  const element = h('div', 'chat-head')
  const titles = h('div')
  titles.append(h('strong', 'chat-title', 'Chatbot Maak'), h('span', 'chat-sub', 'Espace d’écoute et de prévention'))
  const close = h('button', 'chat-close', '×')
  close.type = 'button'
  close.setAttribute('aria-label', 'Fermer le chatbot')
  close.addEventListener('click', onClose)
  element.append(titles, close)
  return { element }
}
