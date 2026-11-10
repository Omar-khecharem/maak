/** Abstraction des boîtes de dialogue natives (remplaçable dans les tests). */
export function createDialogService(win = globalThis) {
  return {
    ask: (message, defaultValue = '') => win.prompt(message, defaultValue),
    confirm: message => win.confirm(message),
  }
}
