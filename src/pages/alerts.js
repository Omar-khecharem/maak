
import { pageHeader } from '../components/ui/page-header.js'
import { button } from '../components/ui/button.js'
import { card } from '../components/ui/card.js'
import { notice } from '../components/ui/notice.js'
import { emptyState } from '../components/ui/empty-state.js'
import { alertCard } from '../components/features/alert-card.js'
import { triggerDemoAlert } from '../components/features/trigger-demo-alert.js'

const recordings = []

let nextRecordingId = 1

const escapeHtml = value =>
  String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char])

const formatDuration = seconds => {
  const safeSeconds = Math.max(0, Math.floor(seconds || 0))
  const mins = Math.floor(safeSeconds / 60)
  const secs = safeSeconds % 60

  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

const stat = (label, value, size = 'text-xl') =>
  card(`
    <p class="text-sm text-[#9b6b82]">${label}</p>
    <p class="mt-2 ${size} font-black text-[#632846]">${value}</p>
  `)

function waveform(seed = 1) {
  return Array.from({ length: 36 }, (_, i) => {
    const height = 10 + ((i * 17 + seed * 13 + i * seed) % 29)

    return `
      <span
        style="height:${height}px"
        class="w-[3px] shrink-0 rounded-full bg-current ${
          i % 3 === 0 ? 'opacity-100' : 'opacity-50'
        }">
      </span>
    `
  }).join('')
}

function recordingCard(recording) {
  const name = escapeHtml(recording.name)
  const date = escapeHtml(recording.date)

  return `
    <article class="group relative overflow-hidden rounded-[24px]
      border border-[#f4d8e6] bg-white p-5
      shadow-[0_8px_30px_rgba(157,55,105,0.06)]
      transition duration-300 hover:-translate-y-1
      hover:shadow-[0_15px_35px_rgba(157,55,105,0.13)]">

      <div class="absolute -right-10 -top-12 h-32 w-32 rounded-full
        bg-[#fff0f6] transition group-hover:scale-125"></div>

      <div class="relative flex items-start justify-between gap-3">
        <div class="flex min-w-0 items-center gap-3">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center
            rounded-2xl bg-gradient-to-br from-[#fce7f3] to-[#fbcfe8]
            text-[#be185d]">
            <svg width="23" height="23" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round" stroke-linejoin="round"
              aria-hidden="true">
              <rect x="9" y="2" width="6" height="12" rx="3"/>
              <path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8"/>
            </svg>
          </div>

          <div class="min-w-0">
            <h3 class="truncate font-bold text-[#632846]">${name}</h3>
            <p class="mt-1 text-xs text-[#a17b90]">${date}</p>
          </div>
        </div>

        <span class="shrink-0 rounded-full bg-[#fdf2f8] px-2.5 py-1
          text-[10px] font-bold text-[#be185d]">
          AUDIO
        </span>
      </div>

      <div class="mt-5 flex items-center gap-3 rounded-2xl
        bg-[#fff7fb] px-3 py-4 text-[#db2777]">

        <button type="button"
          data-audio-play="${recording.id}"
          aria-label="Écouter ${name}"
          class="flex h-10 w-10 shrink-0 items-center justify-center
            rounded-full bg-gradient-to-br from-[#ec4899] to-[#be185d]
            text-white shadow-lg shadow-pink-200 transition hover:scale-105">
          <svg width="17" height="17" viewBox="0 0 24 24"
            fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>

        <div class="min-w-0 flex-1">
          <div class="flex h-9 items-center justify-between gap-[3px]
            overflow-hidden" aria-label="Visualisation sonore">
            ${waveform(recording.id)}
          </div>

          <div class="mt-2 flex justify-between gap-2 text-[11px]
            font-medium text-[#ad8097]">
            <span data-audio-time="${recording.id}">00:00</span>
            <span>${formatDuration(recording.duration)}</span>
          </div>
        </div>
      </div>

      <div class="mt-4 flex items-center justify-between gap-2">
        <span class="flex items-center gap-1.5 text-xs text-[#9b6b82]">
          <span class="h-2 w-2 rounded-full bg-[#ec4899]"></span>
          Enregistrement audio
        </span>

        <button type="button"
          data-audio-delete="${recording.id}"
          class="rounded-xl px-3 py-2 text-xs font-semibold
            text-[#be185d] transition hover:bg-[#fff0f6]"
          aria-label="Supprimer ${name}">
          Supprimer
        </button>
      </div>

      <audio class="hidden"
        data-audio-source="${recording.id}"
        preload="metadata"
        src="${recording.url}"></audio>
    </article>
  `
}

function recordingsSection() {
  const totalBytes = recordings.reduce(
    (sum, recording) => sum + recording.blob.size,
    0,
  )

  const totalMegabytes = (totalBytes / (1024 * 1024)).toFixed(2)

  return `
    <section class="space-y-5" aria-labelledby="recordings-title">

      <div class="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.2em]
            text-[#d94683]">Tes souvenirs audio</p>

          <h2 id="recordings-title" class="mt-2 text-2xl font-black
            tracking-tight text-[#632846]">
            Mes enregistrements
          </h2>

          <p class="mt-1 text-sm text-[#9b6b82]">
            Retrouve et réécoute facilement tes enregistrements.
          </p>
        </div>

        <button type="button" data-record-start
          class="inline-flex items-center gap-2 rounded-2xl
            bg-gradient-to-r from-[#d94683] to-[#ec4899]
            px-5 py-3 text-sm font-bold text-white
            shadow-lg shadow-pink-200 transition hover:-translate-y-0.5
            hover:shadow-xl active:scale-95">
          <span class="text-lg" aria-hidden="true">●</span>
          Nouvel enregistrement
        </button>
      </div>

      <div class="relative overflow-hidden rounded-[28px]
        bg-gradient-to-br from-[#831843] via-[#be185d] to-[#ec4899]
        p-6 text-white shadow-xl shadow-pink-200 sm:p-8">

        <div class="pointer-events-none absolute -right-10 -top-16
          h-52 w-52 rounded-full border-[30px] border-white/10"></div>

        <div class="pointer-events-none absolute -bottom-20 right-24
          h-40 w-40 rounded-full bg-white/5 blur-xl"></div>

        <div class="relative grid gap-6 sm:grid-cols-[1fr_auto]
          sm:items-center">
          <div>
            <span class="inline-flex items-center gap-2 rounded-full
              border border-white/20 bg-white/10 px-3 py-1.5
              text-xs font-semibold">
              <span class="h-2 w-2 rounded-full bg-pink-200"></span>
              TON ESPACE AUDIO
            </span>

            <h3 class="mt-4 max-w-sm text-2xl font-black leading-tight
              sm:text-3xl">
              Ta voix mérite d'être entendue.
            </h3>

            <p class="mt-2 max-w-md text-sm leading-6 text-white/80">
              Enregistre un moment important et retrouve-le ici,
              quand tu en as besoin.
            </p>

            <button type="button" data-record-start
              class="mt-5 rounded-xl bg-white px-5 py-3
                text-sm font-bold text-[#9d174d] shadow-lg
                transition hover:bg-pink-50">
              + Enregistrer maintenant
            </button>
          </div>

          <div class="mx-auto flex h-32 w-32 items-center justify-center
            rounded-full border border-white/25 bg-white/10 sm:mx-0">
            <div class="flex h-20 w-20 items-center justify-center
              rounded-full bg-white/15">
              <svg width="42" height="42" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="1.4"
                stroke-linecap="round" stroke-linejoin="round"
                aria-hidden="true">
                <rect x="9" y="2" width="6" height="12" rx="3"/>
                <path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div data-record-panel class="hidden rounded-[24px]
        border border-[#f4d8e6] bg-white p-5
        shadow-[0_8px_30px_rgba(157,55,105,0.07)]">

        <div class="flex items-center justify-between gap-3">
          <div>
            <h3 class="font-bold text-[#632846]">Nouvel enregistrement</h3>
            <p class="mt-1 text-xs text-[#9b6b82]">
              Autorise le microphone pour commencer.
            </p>
          </div>

          <span data-record-status
            class="rounded-full bg-gray-100 px-3 py-1
              text-xs font-semibold text-gray-600">
            Prêt
          </span>
        </div>

        <div class="my-6 flex flex-col items-center text-center">
          <div data-record-orb
            class="flex h-24 w-24 items-center justify-center
              rounded-full bg-[#fff0f6] text-[#d94683] transition">
            <svg width="36" height="36" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="1.7"
              stroke-linecap="round" stroke-linejoin="round"
              aria-hidden="true">
              <rect x="9" y="2" width="6" height="12" rx="3"/>
              <path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8"/>
            </svg>
          </div>

          <p data-record-timer
            class="mt-4 text-4xl font-black tabular-nums
              tracking-wider text-[#632846]">00:00</p>

          <p data-record-hint class="mt-2 text-sm text-[#9b6b82]">
            Appuie sur le bouton pour démarrer.
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-3">
          <button type="button" data-record-toggle
            class="rounded-xl bg-gradient-to-r from-[#d94683] to-[#ec4899]
              px-5 py-3 text-sm font-bold text-white shadow-lg shadow-pink-200">
            ● Démarrer
          </button>

          <button type="button" data-record-save disabled
            class="rounded-xl bg-gray-100 px-5 py-3 text-sm font-bold
              text-gray-400 disabled:cursor-not-allowed">
            Enregistrer
          </button>

          <button type="button" data-record-cancel
            class="rounded-xl px-4 py-3 text-sm font-semibold
              text-[#9b6b82] hover:bg-[#fff0f6]">
            Fermer
          </button>
        </div>

        <p data-record-error role="alert"
          class="mt-4 hidden rounded-xl bg-red-50 p-3 text-sm text-red-700">
        </p>
      </div>

      <div class="grid gap-3 sm:grid-cols-2">
        <div class="rounded-2xl border border-[#f4d8e6] bg-white px-4 py-3">
          <p class="text-xs text-[#9b6b82]">Enregistrements sauvegardés</p>
          <p data-record-count class="mt-1 text-xl font-black text-[#632846]">
            ${recordings.length}
          </p>
        </div>

        <div class="rounded-2xl border border-[#f4d8e6] bg-white px-4 py-3">
          <p class="text-xs text-[#9b6b82]">Espace audio utilisé</p>
          <p data-record-size class="mt-1 text-xl font-black text-[#632846]">
            ${totalMegabytes} Mo
          </p>
        </div>
      </div>

      <div data-record-list class="grid gap-4 md:grid-cols-2">
        ${recordings.length
          ? recordings.map(recordingCard).join('')
          : `
            <div class="col-span-full rounded-[24px] border-2
              border-dashed border-[#f1c9dc] bg-white/70 px-5 py-10 text-center">
              <div class="mx-auto flex h-16 w-16 items-center justify-center
                rounded-3xl bg-[#fff0f6] text-3xl">♫</div>

              <h3 class="mt-4 font-bold text-[#632846]">
                Aucun enregistrement pour le moment
              </h3>

              <p class="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#9b6b82]">
                Ton espace audio est prêt. Crée ton premier enregistrement
                pour le retrouver facilement ici.
              </p>

              <button type="button" data-record-start
                class="mt-5 rounded-xl bg-[#fce7f3] px-5 py-3
                  text-sm font-bold text-[#be185d] hover:bg-[#fbcfe8]">
                Créer mon premier enregistrement
              </button>
            </div>
          `
        }
      </div>
    </section>
  `
}

function voiceAnalysisSection() {
  return `
    <section class="space-y-5" aria-labelledby="voice-ai-title">

      <div>
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#d94683]">
          Intelligence artificielle
        </p>
        <h2 id="voice-ai-title" class="mt-2 text-2xl font-black text-[#632846]">
          Analyse vocale par IA
        </h2>
        <p class="mt-1 text-sm leading-6 text-[#9b6b82]">
          Découvre un exemple de rapport vocal interactif.
        </p>
      </div>

      <div class="relative overflow-hidden rounded-[28px]
        border border-[#f3d4e4] bg-gradient-to-br from-white
        via-[#fff7fb] to-[#fce7f3] p-5
        shadow-[0_12px_40px_rgba(157,55,105,0.08)] sm:p-7">

        <div class="pointer-events-none absolute -right-16 -top-16
          h-56 w-56 rounded-full bg-[#fbcfe8]/40 blur-3xl"></div>

        <div class="relative grid gap-7 lg:grid-cols-[1fr_.85fr] lg:items-center">
          <div>
            <div class="flex h-14 w-14 items-center justify-center
              rounded-2xl bg-gradient-to-br from-[#ec4899] to-[#9d174d]
              text-white shadow-lg shadow-pink-200">
              <svg width="28" height="28" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="1.7"
                stroke-linecap="round" stroke-linejoin="round"
                aria-hidden="true">
                <path d="M12 3v18M8 7v10M4 10v4M16 6v12M20 9v6"/>
              </svg>
            </div>

            <h3 class="mt-5 text-xl font-black text-[#632846] sm:text-2xl">
              Mieux comprendre les caractéristiques de la voix
            </h3>

            <p class="mt-3 max-w-lg text-sm leading-6 text-[#9b6b82]">
              Sélectionne un enregistrement ou lance l'exemple fictif
              pour découvrir les résultats possibles d'une analyse audio.
            </p>

            <label for="voice-analysis-source"
              class="mb-2 mt-6 block text-sm font-bold text-[#632846]">
              Enregistrement à analyser
            </label>

            <select id="voice-analysis-source"
              class="w-full rounded-2xl border border-[#f0c9dc] bg-white
                px-4 py-3.5 text-sm text-[#632846] outline-none
                focus:border-[#d94683] focus:ring-4 focus:ring-pink-100">
              <option value="demo">Exemple de démonstration</option>
              ${recordings.map(recording => `
                <option value="${recording.id}">
                  ${escapeHtml(recording.name)}
                </option>
              `).join('')}
            </select>

            <p class="mt-2 text-xs leading-5 text-[#a17b90]">
              Les résultats affichés sont simulés, même si tu sélectionnes
              un véritable enregistrement.
            </p>

            <button type="button" data-voice-analyze
              class="mt-5 inline-flex w-full items-center justify-center gap-2
                rounded-2xl bg-gradient-to-r from-[#be185d] to-[#ec4899]
                px-5 py-3.5 text-sm font-extrabold text-white
                shadow-lg shadow-pink-200 transition hover:-translate-y-0.5
                active:scale-[.98] sm:w-auto">
              ✦ Lancer l'analyse IA
            </button>

            <p data-voice-loading role="status"
              class="mt-3 hidden text-sm font-semibold text-[#be185d]">
              <span class="mr-2 inline-block animate-pulse">●</span>
              Simulation de l'analyse en cours…
            </p>
          </div>

          <div class="rounded-[24px] border border-white bg-white/85
            p-5 shadow-[0_10px_35px_rgba(157,55,105,0.08)] sm:p-6">

            <p class="text-xs font-bold uppercase tracking-wider text-[#d94683]">
              Aperçu du rapport
            </p>
            <h3 class="mt-1 font-extrabold text-[#632846]">
              Profil vocal illustratif
            </h3>

            <div class="mt-6 flex h-20 items-center justify-center gap-1.5
              overflow-hidden rounded-2xl bg-[#fff7fb] px-3 text-[#d94683]">
              ${waveform(7)}
            </div>

            <div class="mt-5 grid grid-cols-2 gap-3">
              <div class="rounded-2xl bg-[#fff7fb] p-3.5">
                <p class="text-xs text-[#9b6b82]">Durée d'exemple</p>
                <p class="mt-1 text-xl font-black text-[#632846]">00:24</p>
              </div>
              <div class="rounded-2xl bg-[#fff7fb] p-3.5">
                <p class="text-xs text-[#9b6b82]">Indicateurs</p>
                <p class="mt-1 text-xl font-black text-[#632846]">04</p>
              </div>
            </div>

            <div class="mt-4 rounded-2xl border border-[#f4d8e6]
              bg-white p-3.5">
              <p class="text-sm font-bold text-[#632846]">
                Un rapport facile à comprendre
              </p>
              <p class="mt-1 text-xs leading-5 text-[#9b6b82]">
                Visualisations et indicateurs présentés dans une interface simple.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div data-voice-results class="hidden space-y-4" aria-live="polite">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p class="text-xs font-bold uppercase tracking-widest text-[#d94683]">
              Résultats simulés
            </p>
            <h3 class="mt-1 text-xl font-black text-[#632846]">
              Rapport d'analyse vocale
            </h3>
          </div>
          <span class="rounded-full bg-[#fce7f3] px-3 py-1.5
            text-xs font-bold text-[#be185d]">
            Maquette IA
          </span>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article class="rounded-[22px] border border-[#f4d8e6] bg-white p-5">
            <p class="text-sm font-semibold text-[#9b6b82]">Rythme vocal</p>
            <p class="mt-3 text-2xl font-black text-[#632846]">Modéré</p>
            <div class="mt-3 h-2 overflow-hidden rounded-full bg-[#fce7f3]">
              <div class="h-full w-[64%] rounded-full bg-gradient-to-r from-[#d94683] to-[#ec4899]"></div>
            </div>
            <p class="mt-2 text-xs text-[#9b6b82]">Exemple visuel : 64/100</p>
          </article>

          <article class="rounded-[22px] border border-[#f4d8e6] bg-white p-5">
            <p class="text-sm font-semibold text-[#9b6b82]">Pauses détectées</p>
            <p class="mt-3 text-2xl font-black text-[#632846]">3 pauses</p>
            <p class="mt-3 text-xs leading-5 text-[#9b6b82]">
              Valeur fictive pour illustrer le rapport.
            </p>
          </article>

          <article class="rounded-[22px] border border-[#f4d8e6] bg-white p-5">
            <p class="text-sm font-semibold text-[#9b6b82]">Volume sonore</p>
            <p class="mt-3 text-2xl font-black text-[#632846]">Variable</p>
            <p class="mt-3 text-xs leading-5 text-[#9b6b82]">
              Variation simulée de l'intensité audio.
            </p>
          </article>

          <article class="rounded-[22px] border border-[#f4d8e6] bg-white p-5">
            <p class="text-sm font-semibold text-[#9b6b82]">Qualité du signal</p>
            <p class="mt-3 text-2xl font-black text-[#632846]">À vérifier</p>
            <p class="mt-3 text-xs leading-5 text-[#9b6b82]">
              Une vraie mesure nécessiterait un traitement audio.
            </p>
          </article>
        </div>

        <div class="grid gap-4 lg:grid-cols-2">
          <article class="rounded-[24px] border border-[#f4d8e6] bg-white p-5 sm:p-6">
            <h4 class="font-extrabold text-[#632846]">Résumé illustratif</h4>
            <p class="mt-3 text-sm leading-7 text-[#806176]">
              Cet exemple illustre la présentation de caractéristiques
              mesurables comme le débit, les pauses et l'intensité.
              Ces données ne permettent pas, à elles seules, de conclure
              à un état émotionnel ou à une situation de danger.
            </p>
          </article>

          <article class="rounded-[24px] border border-[#f4d8e6]
            bg-gradient-to-br from-[#fff7fb] to-[#fce7f3] p-5 sm:p-6">
            <h4 class="font-extrabold text-[#632846]">Ta sécurité avant tout</h4>
            <p class="mt-3 text-sm leading-6 text-[#806176]">
              Cette démonstration ne détecte pas réellement la violence,
              le mensonge ou le danger. En cas de risque immédiat,
              contacte une personne de confiance ou les services d'urgence adaptés.
            </p>
          </article>
        </div>
      </div>

      <p class="rounded-2xl border border-[#f4d8e6] bg-white px-4 py-3
        text-xs leading-5 text-[#9b6b82]">
        <strong class="text-[#632846]">Transparence :</strong>
        aucun modèle d'IA n'analyse réellement la voix dans cette version.
        Les résultats du rapport sont fictifs.
      </p>
    </section>
  `
}

function setupAlertsPage(page) {
  if (!page || page.dataset.initialized === 'true') return

  page.dataset.initialized = 'true'

  const panel = page.querySelector('[data-record-panel]')
  const list = page.querySelector('[data-record-list]')
  const count = page.querySelector('[data-record-count]')
  const size = page.querySelector('[data-record-size]')

  const timer = page.querySelector('[data-record-timer]')
  const status = page.querySelector('[data-record-status]')
  const hint = page.querySelector('[data-record-hint]')
  const error = page.querySelector('[data-record-error]')
  const toggle = page.querySelector('[data-record-toggle]')
  const save = page.querySelector('[data-record-save]')
  const orb = page.querySelector('[data-record-orb]')

  const analysisButton = page.querySelector('[data-voice-analyze]')
  const analysisLoading = page.querySelector('[data-voice-loading]')
  const analysisResults = page.querySelector('[data-voice-results]')

  if (!panel || !list) return

  let mediaRecorder = null
  let stream = null
  let chunks = []
  let startedAt = 0
  let elapsed = 0
  let interval = null
  let blob = null
  let isRecording = false
  let cancelAfterStop = false
  let analysisTimeout = null

  const showError = message => {
    if (!error) return
    error.textContent = message
    error.classList.remove('hidden')
  }

  const hideError = () => {
    if (!error) return
    error.textContent = ''
    error.classList.add('hidden')
  }

  const updateTimer = () => {
    const seconds = isRecording
      ? elapsed + Math.floor((Date.now() - startedAt) / 1000)
      : elapsed

    if (timer) timer.textContent = formatDuration(seconds)
  }

  const stopTracks = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop())
      stream = null
    }
  }

  const cleanup = () => {
    if (interval) window.clearInterval(interval)
    interval = null
    stopTracks()
    isRecording = false
    mediaRecorder = null
  }

  const renderList = () => {
    if (list) {
      list.innerHTML = recordings.length
        ? recordings.map(recordingCard).join('')
        : `
          <div class="col-span-full rounded-[24px] border-2
            border-dashed border-[#f1c9dc] bg-white/70 px-5 py-10 text-center">
            <div class="mx-auto flex h-16 w-16 items-center justify-center
              rounded-3xl bg-[#fff0f6] text-3xl">♫</div>
            <h3 class="mt-4 font-bold text-[#632846]">
              Aucun enregistrement pour le moment
            </h3>
            <p class="mt-2 text-sm text-[#9b6b82]">
              Crée ton premier enregistrement audio.
            </p>
            <button type="button" data-record-start
              class="mt-5 rounded-xl bg-[#fce7f3] px-5 py-3
                text-sm font-bold text-[#be185d]">
              Créer mon premier enregistrement
            </button>
          </div>
        `
    }

    if (count) count.textContent = String(recordings.length)

    if (size) {
      const bytes = recordings.reduce(
        (sum, recording) => sum + recording.blob.size,
        0,
      )
      size.textContent = `${(bytes / (1024 * 1024)).toFixed(2)} Mo`
    }

    // Mettre à jour les choix d'audio dans le sélecteur d'analyse.
    const select = page.querySelector('#voice-analysis-source')

    if (select) {
      const selectedValue = select.value
      select.innerHTML = `
        <option value="demo">Exemple de démonstration</option>
        ${recordings.map(recording => `
          <option value="${recording.id}">
            ${escapeHtml(recording.name)}
          </option>
        `).join('')}
      `

      if ([...select.options].some(option => option.value === selectedValue)) {
        select.value = selectedValue
      }
    }
  }

  const resetPanel = () => {
    cleanup()
    elapsed = 0
    blob = null
    chunks = []
    cancelAfterStop = false

    if (timer) timer.textContent = '00:00'
    if (status) status.textContent = 'Prêt'
    if (hint) hint.textContent = 'Appuie sur le bouton pour démarrer.'
    if (toggle) toggle.textContent = '● Démarrer'

    if (save) {
      save.disabled = true
      save.classList.add('text-gray-400')
    }

    if (orb) orb.classList.remove('animate-pulse', 'bg-pink-100')
  }

  const openPanel = () => {
    panel.classList.remove('hidden')
    hideError()
    panel.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const stopPlayback = exceptAudio => {
    list.querySelectorAll('audio').forEach(audio => {
      if (audio !== exceptAudio) {
        audio.pause()
        audio.currentTime = 0
      }
    })

    list.querySelectorAll('[data-audio-play]').forEach(button => {
      if (exceptAudio?.dataset.audioSource !== button.dataset.audioPlay) {
        button.innerHTML = `
          <svg width="17" height="17" viewBox="0 0 24 24"
            fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z"/>
          </svg>
        `
      }
    })
  }

  page.addEventListener('click', async event => {
    const target = event.target instanceof Element
      ? event.target
      : event.target?.parentElement

    if (!target) return

    const startButton = target.closest('[data-record-start]')

    if (startButton) {
      openPanel()
      return
    }

    if (target.closest('[data-record-cancel]')) {
      if (isRecording && mediaRecorder?.state === 'recording') {
        cancelAfterStop = true
        mediaRecorder.stop()
      } else {
        resetPanel()
        panel.classList.add('hidden')
        hideError()
      }
      return
    }

    const playButton = target.closest('[data-audio-play]')

    if (playButton) {
      const id = playButton.dataset.audioPlay
      const audio = list.querySelector(
        `[data-audio-source="${id}"]`,
      )

      if (!audio) return

      if (audio.paused) {
        stopPlayback(audio)

        try {
          await audio.play()
          playButton.innerHTML = '<span class="text-lg">Ⅱ</span>'
        } catch {
          showError('Impossible de lire cet enregistrement.')
        }
      } else {
        audio.pause()
        playButton.innerHTML = '<span class="text-lg">▶</span>'
      }

      audio.ontimeupdate = () => {
        const label = list.querySelector(`[data-audio-time="${id}"]`)
        if (label) {
          label.textContent = formatDuration(audio.currentTime)
        }
      }

      audio.onended = () => {
        playButton.innerHTML = `
          <svg width="17" height="17" viewBox="0 0 24 24"
            fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z"/>
          </svg>
        `
      }
      return
    }

    const deleteButton = target.closest('[data-audio-delete]')

    if (deleteButton) {
      const id = Number(deleteButton.dataset.audioDelete)
      const index = recordings.findIndex(recording => recording.id === id)

      if (index !== -1) {
        const audio = list.querySelector(
          `[data-audio-source="${id}"]`,
        )

        if (audio) {
          audio.pause()
          audio.removeAttribute('src')
          audio.load()
        }

        URL.revokeObjectURL(recordings[index].url)
        recordings.splice(index, 1)
        renderList()
      }
      return
    }

    if (target.closest('[data-record-toggle]')) {
      hideError()

      if (isRecording) {
        elapsed += Math.floor((Date.now() - startedAt) / 1000)

        if (mediaRecorder?.state === 'recording') {
          mediaRecorder.stop()
        }
        return
      }

      if (!navigator.mediaDevices?.getUserMedia ||
          typeof MediaRecorder === 'undefined') {
        showError(
          'Ce navigateur ne prend pas en charge l’enregistrement audio. ' +
          'Utilise une version récente de Chrome ou Edge sur HTTPS ou localhost.',
        )
        return
      }

      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        chunks = []
        elapsed = 0
        cancelAfterStop = false

        const mimeType = [
          'audio/webm;codecs=opus',
          'audio/webm',
          'audio/mp4',
        ].find(type => MediaRecorder.isTypeSupported(type))

        const recorder = new MediaRecorder(
          stream,
          mimeType ? { mimeType } : undefined,
        )

        mediaRecorder = recorder

        recorder.ondataavailable = dataEvent => {
          if (dataEvent.data.size > 0) chunks.push(dataEvent.data)
        }

        recorder.onerror = () => {
          cleanup()
          showError('Une erreur est survenue pendant l’enregistrement.')
        }

        recorder.onstop = () => {
          const audioBlob = new Blob(chunks, {
            type: recorder.mimeType || 'audio/webm',
          })

          stopTracks()
          if (interval) window.clearInterval(interval)
          interval = null
          isRecording = false
          mediaRecorder = null

          if (cancelAfterStop) {
            resetPanel()
            panel.classList.add('hidden')
            hideError()
            return
          }

          blob = audioBlob
          updateTimer()

          if (status) status.textContent = 'Terminé'
          if (hint) hint.textContent = 'Ton audio est prêt à être sauvegardé.'
          if (toggle) toggle.textContent = '● Recommencer'

          if (save) {
            save.disabled = !blob.size
            save.classList.toggle('text-gray-400', !blob.size)
          }

          if (orb) orb.classList.remove('animate-pulse', 'bg-pink-100')
        }

        recorder.start()
        isRecording = true
        startedAt = Date.now()

        if (status) status.textContent = 'En cours'
        if (hint) hint.textContent = 'Enregistrement en cours… parle naturellement.'
        if (toggle) toggle.textContent = '■ Arrêter'
        if (orb) orb.classList.add('animate-pulse', 'bg-pink-100')
        if (save) save.disabled = true

        interval = window.setInterval(updateTimer, 250)
      } catch {
        cleanup()
        showError(
          'Accès au microphone refusé. Vérifie les permissions du navigateur puis réessaie.',
        )
      }
      return
    }

    if (target.closest('[data-record-save]')) {
      if (!blob?.size) return

      const id = nextRecordingId++
      const name = `Enregistrement ${recordings.length + 1}`

      recordings.unshift({
        id,
        name,
        date: new Date().toLocaleString('fr-FR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        duration: elapsed,
        blob,
        url: URL.createObjectURL(blob),
      })

      renderList()
      resetPanel()
      panel.classList.add('hidden')
      return
    }

    if (target.closest('[data-voice-analyze]')) {
      if (!analysisButton || !analysisResults) return

      if (analysisTimeout) window.clearTimeout(analysisTimeout)

      analysisResults.classList.add('hidden')
      analysisLoading?.classList.remove('hidden')
      analysisButton.disabled = true
      analysisButton.classList.add('opacity-70', 'cursor-wait')

      analysisTimeout = window.setTimeout(() => {
        analysisLoading?.classList.add('hidden')
        analysisResults.classList.remove('hidden')
        analysisButton.disabled = false
        analysisButton.classList.remove('opacity-70', 'cursor-wait')

        const select = page.querySelector('#voice-analysis-source')
        const title = analysisResults.querySelector('h3')

        if (title) {
          title.textContent = select?.value === 'demo'
            ? 'Rapport d’analyse — exemple fictif'
            : 'Rapport d’analyse — simulation fictive'
        }

        analysisResults.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })

        analysisTimeout = null
      }, 900)
    }
  })

  // Libérer les ressources audio quand on quitte la page.
  // L'application peut appeler cette méthode lors du démontage.
  page.cleanupAlertsPage = () => {
    if (analysisTimeout) window.clearTimeout(analysisTimeout)
    if (isRecording && mediaRecorder?.state === 'recording') {
      mediaRecorder.stop()
    }
    cleanup()
  }
}

export function createAlertsPage() {
  const act = (fn, message) => (_el, ctx) => {
    fn(ctx.services.alerts)
    ctx.refresh()
    ctx.toast(message)
  }

  return {
    id: 'alerts',
    watch: [],

    render({ services }) {
      const alerts = services.alerts.list()

      return `
        <section class="page space-y-8" data-alerts-page>

          ${recordingsSection()}

          ${voiceAnalysisSection()}

          <section class="space-y-5" aria-labelledby="alerts-history-title">
            ${pageHeader({
              eyebrow: 'Centre de démonstration',
              title: 'Historique des alertes',
              subtitle: 'Consulte les alertes fictives et retrouve les simulations effectuées.',
              actionHtml: button({
                label: '＋ Simuler une alerte',
                action: 'new-alert',
              }),
            })}

            <div class="grid gap-4 sm:grid-cols-3">
              ${stat('Alertes de démonstration', alerts.length, 'text-3xl')}
              ${stat('Appareil connecté', 'Non')}
              ${stat('Notifications envoyées', 'Aucune')}
            </div>

            ${notice(
              '<strong>Important :</strong> ce prototype n’envoie aucun SMS, appel, message ni position réelle. Les localisations affichées sont fictives.',
            )}

            <div class="space-y-4 border-t border-[#f4d8e6] pt-7">
              <div>
                <h2 id="alerts-history-title" class="text-xl font-black text-[#632846]">
                  Historique des alertes
                </h2>
                <p class="mt-1 text-sm text-[#9b6b82]">
                  Consulte les simulations effectuées pendant les tests.
                </p>
              </div>

              ${alerts.length
                ? `<div class="grid gap-4 lg:grid-cols-2">
                    ${alerts.map(alertCard).join('')}
                  </div>`
                : emptyState({
                    title: 'Aucune alerte de test',
                    text: 'Lance une simulation pour voir apparaître une entrée ici.',
                  })
              }

              <div class="flex flex-wrap gap-3">
                ${button({
                  label: 'Réinitialiser l’historique',
                  action: 'reset-alerts',
                  variant: 'soft',
                })}
                ${button({
                  label: 'Vider l’historique',
                  action: 'clear-alerts',
                  variant: 'soft',
                })}
              </div>
            </div>
          </section>
        </section>
      `
    },

    mount() {
      const page = document.querySelector('[data-alerts-page]')
      setupAlertsPage(page)
    },

    actions: {
      'new-alert': triggerDemoAlert,

      'reset-alerts': act(
        service => service.reset(),
        'Historique de démonstration réinitialisé.',
      ),

      'clear-alerts': act(
        service => service.clear(),
        'Historique de démonstration vidé.',
      ),
    },
  }
}
