import { h } from '../../core/dom.js'
import { icon } from '../ui/icons.js'

/** Zone de saisie : texte, micro, envoi. Ne connaît ni le bot ni l'enregistreur. */
export function createComposer({ onSend, onMicClick }) {
  const form = h('form', 'chat-form')
  const input = h('input', 'chat-input')
  Object.assign(input, { type: 'text', placeholder: 'Écrivez votre message…', autocomplete: 'off', maxLength: 2000 })
  input.setAttribute('aria-label', 'Votre message')

  const mic = h('button', 'chat-iconbtn chat-mic')
  mic.type = 'button'
  mic.innerHTML = icon('mic')
  mic.setAttribute('aria-label', 'Enregistrer un message vocal')
  mic.addEventListener('click', onMicClick)

  const send = h('button', 'chat-send')
  send.type = 'submit'
  send.innerHTML = icon('send')
  send.setAttribute('aria-label', 'Envoyer')

  form.append(input, mic, send)
  form.addEventListener('submit', event => {
    event.preventDefault()
    const text = input.value.trim()
    if (!text || send.disabled) return
    input.value = ''
    onSend(text)
  })

  return {
    element: form,
    focus: () => input.focus(),
    setBusy(busy) { send.disabled = busy; mic.disabled = busy },
    setRecording(on) {
      form.classList.toggle('is-recording', on)
      mic.classList.toggle('is-live', on)
      mic.innerHTML = icon(on ? 'stop' : 'mic')
      mic.setAttribute('aria-label', on ? 'Terminer et envoyer le vocal' : 'Enregistrer un message vocal')
    },
  }
}
