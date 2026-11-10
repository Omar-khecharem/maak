/**
 * Enregistreur vocal (MediaRecorder). Aucune dépendance à l'interface.
 * Les erreurs portent un `code` : 'unsupported' | 'denied'.
 */
export function createVoiceRecorder({
  maxSeconds = 120,
  minSeconds = 0.6,
  mediaDevices = globalThis.navigator?.mediaDevices,
  Recorder = globalThis.MediaRecorder,
} = {}) {
  let recorder = null, stream = null, chunks = [], timer = null, startedAt = 0, cancelled = false

  const isSupported = () => !!(mediaDevices?.getUserMedia && Recorder)
  const isRecording = () => recorder?.state === 'recording'
  const release = () => {
    clearInterval(timer)
    stream?.getTracks().forEach(t => t.stop())
    recorder = stream = timer = null
    chunks = []
  }
  const fail = code => Object.assign(new Error(code), { code })

  async function start({ onTick, onEnd, onComplete } = {}) {
    if (!isSupported()) throw fail('unsupported')
    if (isRecording()) return
    try {
      stream = await mediaDevices.getUserMedia({ audio: true })
    } catch {
      throw fail('denied')
    }
    cancelled = false
    chunks = []
    recorder = new Recorder(stream)
    recorder.ondataavailable = e => { if (e.data.size) chunks.push(e.data) }
    recorder.onstop = () => {
      const duration = (Date.now() - startedAt) / 1000
      const blob = new Blob(chunks, { type: recorder.mimeType || 'audio/webm' })
      const wasCancelled = cancelled
      release()
      onEnd?.()
      if (!wasCancelled && blob.size && duration >= minSeconds) onComplete?.({ blob, duration })
    }
    startedAt = Date.now()
    recorder.start()
    timer = setInterval(() => {
      const elapsed = (Date.now() - startedAt) / 1000
      onTick?.(elapsed)
      if (elapsed >= maxSeconds) stop()
    }, 250)
  }

  function stop() { if (isRecording()) recorder.stop() }
  function cancel() { cancelled = true; stop() }

  return { isSupported, isRecording, start, stop, cancel }
}
