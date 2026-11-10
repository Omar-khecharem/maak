import { createChatHeader } from './chat-header.js'
import { createChatMessageList } from './chat-message-list.js'
import { createRecordingBar } from './chat-recording-bar.js'
import { createComposer } from './chat-composer.js'

/**
 * Orchestrateur du chat. Dépend d'abstractions injectées :
 *  - recorder     : { start, stop, cancel, isRecording }
 *  - replyService : { reply(), delay }
 *  - content      : textes (bienvenue, erreurs, accusé vocal)
 */
export function createChatBot({ recorder, replyService, content, onToggle }) {
  const MAX_MESSAGES = 200
  let isOpen = false, mounted = false
  let messages = []
  let pending = null
  let ui = null

  const nextId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`

  function addMessage(type, payload) {
    const message = { id: nextId(), type, ...payload }
    messages.push(message)
    if (messages.length > MAX_MESSAGES) {
      const old = messages.shift()
      if (old.audioUrl) URL.revokeObjectURL(old.audioUrl)
    }
    ui?.list.append(message)
  }


async function replyLater(text) {
  ui.composer.setBusy(true);

  try {
    const answer = text ?? await replyService.reply(
      messages[messages.length - 1]?.content ?? ''
    );

    addMessage('bot', { content: answer });
  } catch (error) {
    console.error(error);
    addMessage('bot', {
      content: 'Impossible de contacter le chatbot. Réessaie.'
    });
  } finally {
    ui.composer.setBusy(false);
  }
}


  function handleSend(text) {
    addMessage('user', { content: text })
    replyLater()
  }

  async function handleMic() {
    if (recorder.isRecording()) return recorder.stop()
    try {
      await recorder.start({
        onTick: s => ui.bar.setTime(s),
        onEnd: () => { ui.bar.hide(); ui.composer.setRecording(false) },
        onComplete: ({ blob, duration }) => {
          addMessage('user', { content: 'Message vocal', audioUrl: URL.createObjectURL(blob), duration })
          replyLater(content.voiceAck)
        },
      })
      ui.bar.show()
      ui.composer.setRecording(true)
    } catch (error) {
      addMessage('bot', { content: content.errors[error.code] ?? content.errors.unsupported })
    }
  }

  function setOpen(value) {
    if (isOpen === value || !mounted) return
    isOpen = value
    if (!value) {
      recorder.cancel()
      clearTimeout(pending)
      if (pending) ui.composer.setBusy(false)
      pending = null
    }
    ui.container.hidden = !value
    onToggle?.(isOpen)
    if (value) requestAnimationFrame(() => ui.composer.focus())
  }

  const onKeydown = e => { if (e.key === 'Escape' && isOpen) setOpen(false) }

  function initDOM({ containerEl, panelEl }) {
    if (mounted) cleanup()
    containerEl.className = 'chat-overlay'
    containerEl.hidden = true
    panelEl.className = 'chat-panel'
    panelEl.setAttribute('role', 'dialog')
    panelEl.setAttribute('aria-modal', 'true')
    panelEl.setAttribute('aria-label', 'Chatbot Maak')

    const header = createChatHeader({ onClose: () => setOpen(false) })
    const list = createChatMessageList({ max: MAX_MESSAGES })
    const bar = createRecordingBar({ onCancel: () => recorder.cancel() })
    const composer = createComposer({ onSend: handleSend, onMicClick: handleMic })
    panelEl.replaceChildren(header.element, list.element, bar.element, composer.element)
    ui = { container: containerEl, list, bar, composer }
    document.addEventListener('keydown', onKeydown)
    mounted = true

    if (!messages.length) messages.push({ id: 'welcome', type: 'bot', content: content.welcome })
    messages.forEach(m => list.append(m))
  }

  function cleanup() {
    recorder.cancel()
    clearTimeout(pending)
    pending = null
    document.removeEventListener('keydown', onKeydown)
    isOpen = false
    mounted = false
    ui = null
  }

  return {
    initDOM,
    open: () => setOpen(true),
    close: () => setOpen(false),
    toggle: () => setOpen(!isOpen),
    isOpen: () => isOpen,
    cleanup,
  }
}
