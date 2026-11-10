import { h } from '../../core/dom.js'
import { formatDuration } from '../../core/format.js'
import { icon } from '../ui/icons.js'

export function createRecordingBar({ onCancel }) {
  const element = h('div', 'chat-recbar')
  element.hidden = true
  const time = h('span', 'chat-rectime', '0:00')
  const cancel = h('button', 'chat-iconbtn')
  cancel.type = 'button'
  cancel.innerHTML = icon('trash')
  cancel.setAttribute('aria-label', 'Annuler l’enregistrement')
  cancel.addEventListener('click', onCancel)
  element.append(h('span', 'chat-recdot'), h('span', 'chat-recmsg', 'Enregistrement…'), time, cancel)
  return {
    element,
    show() { time.textContent = '0:00'; element.hidden = false },
    hide() { element.hidden = true },
    setTime(seconds) { time.textContent = formatDuration(seconds) },
  }
}
