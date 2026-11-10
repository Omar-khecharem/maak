
import gameVideo from '../../video_game.mp4'

export function createGamePage() {
  let cleanup = null

  return {
    id: 'game',
    watch: [],

    render() {
      return `
        <section
          class="page -mx-4 -mt-4 flex min-h-[calc(100dvh-64px)] flex-col overflow-hidden bg-[#fff7fb] sm:-mx-6 sm:-mt-6"
          aria-label="Présentation vidéo du concept MAAK"
        >
          <header class="flex shrink-0 items-center gap-3 border-b border-[#f4d8e6] bg-white px-4 py-3 sm:px-6">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fce7f3] text-xl text-[#be185d]">
              <span aria-hidden="true">♡</span>
            </div>

            <div class="min-w-0">
              <h1 class="truncate text-base font-black text-[#632846] sm:text-lg">
                Découvrir MAAK
              </h1>
              <p class="text-xs text-[#9b6b82]">
                Une expérience immersive
              </p>
            </div>
          </header>

          <div
            id="maak-video-container"
            class="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-[#321225]"
          >
            <video
              id="maak-game-video"
              class="absolute inset-0 h-full w-full object-contain"
              playsinline
              
              preload="auto"
              aria-label="Vidéo de présentation MAAK"
            >
              <source src="${gameVideo}" type="video/mp4" />
              Votre navigateur ne prend pas en charge la lecture vidéo.
            </video>

            <button
              id="maak-start-video"
              type="button"
              aria-label="Lire la vidéo"
              class="group absolute left-1/2 top-1/2 z-10 flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-gradient-to-br from-[#ec4899] to-[#be185d] text-white shadow-[0_8px_35px_rgba(190,24,93,0.45)] transition duration-300 hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-200 active:scale-95 sm:h-[88px] sm:w-[88px]"
            >
              <svg
                class="ml-1 h-8 w-8"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 4.8c0-.8.9-1.3 1.6-.9l11 6.5a1.8 1.8 0 0 1 0 3.1l-11 6.5c-.7.4-1.6-.1-1.6-.9V4.8Z" />
              </svg>
            </button>

            <div
              id="maak-video-error"
              class="absolute bottom-4 left-4 right-4 z-20 hidden rounded-xl bg-black/80 px-4 py-3 text-center text-sm text-white"
              role="alert"
            >
              Impossible de lire la vidéo. Vérifie le fichier et réessaie.
            </div>
          </div>
        </section>
      `
    },

    actions: {},

    mount() {
      // Nettoyer les événements d'un éventuel montage précédent.
      if (cleanup) {
        cleanup()
        cleanup = null
      }

      const video = document.getElementById('maak-game-video')
      const button = document.getElementById('maak-start-video')
      const errorBox = document.getElementById('maak-video-error')

      if (!video || !button) {
        console.error('MAAK : vidéo ou bouton introuvable. Vérifie que render() est inséré dans le DOM avant mount().')
        return
      }

      let destroyed = false

      const showError = (message) => {
        if (!errorBox) return
        errorBox.textContent = message
        errorBox.classList.remove('hidden')
      }

      const hideError = () => {
        errorBox?.classList.add('hidden')
      }

      const startVideo = async (event) => {
        event?.preventDefault()

        if (destroyed) return

        hideError()

        try {
          // Charger la source si nécessaire.
          if (video.readyState === 0) {
            video.load()
          }

          await video.play()

          button.classList.add('hidden')
        } catch (error) {
          console.error('Erreur de lecture MAAK :', error)

          button.classList.remove('hidden')

          if (video.error) {
            showError('Le fichier vidéo ne peut pas être chargé. Vérifie son chemin et son format MP4.')
          } else {
            showError('La lecture a échoué. Clique à nouveau sur le bouton pour réessayer.')
          }
        }
      }

      const handleEnded = () => {
        button.classList.remove('hidden')
      }

      const handleError = () => {
        button.classList.remove('hidden')
        showError('Impossible de charger la vidéo. Vérifie que video_game.mp4 est accessible.')
        console.error('Erreur vidéo :', video.error)
      }

      button.addEventListener('click', startVideo)
      video.addEventListener('ended', handleEnded)
      video.addEventListener('error', handleError)

      cleanup = () => {
        destroyed = true
        button.removeEventListener('click', startVideo)
        video.removeEventListener('ended', handleEnded)
        video.removeEventListener('error', handleError)
      }
    },

    unmount() {
      if (cleanup) {
        cleanup()
        cleanup = null
      }

      const video = document.getElementById('maak-game-video')
      if (video) video.pause()
    },
  }
}
