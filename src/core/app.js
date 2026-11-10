import { appShell } from '../components/layout/app-shell.js'
import { bottomNav } from '../components/layout/bottom-nav.js'
import { createToast } from '../components/ui/toast.js'

/**
 * Coordinateur de l'application : monte le squelette, rend la page courante,
 * délègue les évènements (data-page / data-action / data-change) à la page active.
 * Il ne connaît aucune page en particulier : elles lui sont injectées.
 */
export function createApp({ root, store, services, pages, navItems, user, chat }) {
  const registry = new Map(pages.map(page => [page.id, page]))
  root.innerHTML = appShell(user)

  const slot = name => root.querySelector(`[data-slot="${name}"]`)
  const toast = createToast(slot('toast'))
  const current = () => registry.get(store.get().page)
  let lastRendered = null

  const ctx = { store, services, toast: toast.show, navigate, refresh: renderPage }

  function navigate(id) {
    if (!registry.has(id)) return
    store.set({ page: id })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function renderPage() {
    const target = slot('page')
    target.innerHTML = current().render(ctx)
    if (lastRendered !== store.get().page) {
      target.firstElementChild?.classList.add('page-enter')
      lastRendered = store.get().page
    }
  }

  function renderNav() {
    const { page, chatOpen } = store.get()
    slot('nav').innerHTML = bottomNav({
      items: navItems,
      isActive: item => (item.action ? chatOpen : !chatOpen && item.page === page),
    })
  }

  root.addEventListener('click', event => {
    const nav = event.target.closest('[data-page]')
    if (nav) return navigate(nav.dataset.page)
    const trigger = event.target.closest('[data-action]')
    if (!trigger) return
    const name = trigger.dataset.action
    if (name === 'toggle-chat') return chat.toggle()
    current().actions?.[name]?.(trigger, ctx)
  })

  root.addEventListener('change', event => {
    const field = event.target.closest('[data-change]')
    if (field) current().changes?.[field.dataset.change]?.(field, ctx)
  })

  let previous = store.get()
  store.subscribe(state => {
    const watched = current().watch ?? []
    if (state.page !== previous.page || watched.some(key => state[key] !== previous[key])) renderPage()
    if (state.page !== previous.page || state.chatOpen !== previous.chatOpen) renderNav()
    previous = state
  })

  chat.initDOM({ containerEl: slot('chat'), panelEl: slot('chat-panel') })
  renderPage()
  renderNav()
  return { navigate }
}
