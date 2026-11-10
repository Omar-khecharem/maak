
import { escapeHtml } from '../../core/dom.js'

export const appHeader = user => `
  <header class="app-header mb-6 flex w-full items-center justify-between gap-3 border-b border-[#f9d5e5] pb-4 sm:mb-7 md:mb-8">

    <!-- Logo MAAK : mobile et desktop -->
    <button
      type="button"
      data-page="home"
      class="flex min-w-0 shrink-0 items-center gap-3 text-left transition-opacity hover:opacity-80"
      aria-label="Retour à l'accueil"
    >
      <img
        src="/logo.png"
        alt="Logo MAAK"
        class="h-15 w-15 shrink-0 rounded-xl object-contain sm:h-12 sm:w-12 md:h-14 md:w-14"
      >

      <div class="flex min-w-0 flex-col">
        <span class="text-xl font-black tracking-tight text-[#be185d] sm:text-2xl">
          maak
        </span>
        <span class="hidden text-[10px] font-semibold tracking-wide text-[#9b6b82] sm:block">
          ÉCOUTE · PRÉVENTION · CONFIANCE
        </span>
      </div>
    </button>

    <!-- Profil : compact, sans cercle décoratif -->
    <div class="ml-auto flex min-w-0 shrink-0 items-center">
      <div class="flex max-w-full items-center gap-2 rounded-full border border-[#f9d5e5] bg-white p-1.5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:gap-3 sm:pr-4">

        <!-- Photo sans fond coloré ni halo -->
        <div class="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#f9d5e5] bg-white sm:h-11 sm:w-11 md:h-12 md:w-12">
          <img
            src="/photo_de_profil.jpg"
            alt="Photo de profil"
            class="block h-full w-full rounded-full object-cover"
            onerror="this.onerror=null; this.style.display='none'; this.parentElement.classList.add('profile-fallback'); this.parentElement.innerHTML='<span class=&quot;flex h-full w-full items-center justify-center text-sm font-black text-[#be185d]&quot;>M</span>';"
          >
        </div>

        <!-- Informations visibles à partir du mobile large -->
        <div class="hidden min-w-0 sm:block">
          <p class="max-w-32 truncate text-sm font-extrabold text-[#632846]">
            ${escapeHtml(user?.name || 'Utilisateur')}
          </p>
          <p class="mt-0.5 text-xs text-[#9b6b82]">
            Espace personnel
          </p>
        </div>

      </div>
    </div>

  </header>
`
