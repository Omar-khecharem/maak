import { h } from '../../core/dom.js'
import { createChatMessage } from './chat-message.js'

export function createChatMessageList({ max = 200 } = {}) {
  const element = h('div', 'chat-messages')
  element.setAttribute('role', 'list')
  element.setAttribute('aria-live', 'polite')
  const scrollToEnd = () => { element.scrollTop = element.scrollHeight }
  return {
    element,
    append(message) {
      element.append(createChatMessage(message))
      while (element.children.length > max) element.firstElementChild.remove()
      scrollToEnd()
    },
  }
}
