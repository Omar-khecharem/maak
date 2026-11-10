import { appHeader } from './app-header.js'
import { appFooter } from './app-footer.js'

/** Squelette statique : le contenu variable est injecté dans les `data-slot`. */
export const appShell = user => `
<main class="main-area mx-auto min-h-screen w-full px-4 pt-6 sm:px-7 sm:pt-8 pb-[calc(120px+env(safe-area-inset-bottom,0px))]">
  ${appHeader(user)}
  <div data-slot="page"></div>
  ${appFooter()}
</main>
<div data-slot="nav"></div>
<div data-slot="chat"><div data-slot="chat-panel"></div></div>
<div data-slot="toast"></div>`
