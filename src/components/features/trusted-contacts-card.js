import { card } from '../ui/card.js'
import { contactCard } from './contact-card.js'

export const trustedContactsCard = contacts => card(`
  <div class="flex items-center justify-between"><h2 class="font-extrabold">Mes contacts de confiance</h2><button class="text-sm font-bold text-[#be185d]" data-page="profile">Gérer</button></div>
  <div class="mt-4 space-y-3">${contacts.map(c => contactCard(c)).join('')}</div>`)
