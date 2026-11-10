
import { escapeHtml } from '../core/dom.js'
import { pageHeader } from '../components/ui/page-header.js'
import { button } from '../components/ui/button.js'
import { card } from '../components/ui/card.js'
import { contactCard } from '../components/features/contact-card.js'
import { resourceCard } from '../components/features/resource-card.js'

const PROFILE_STYLES = {
  primary: '#be185d',
  secondary: '#9b6b82',
  dark: '#632846',
  background: '#fff5f9',
  border: '#fce7f3',
}

function sectionHeading(title, subtitle) {
  return `
    <div class="mb-5">
      <h2 class="text-xl font-extrabold tracking-tight text-[#632846]">
        ${title}
      </h2>
      <p class="mt-1 text-sm leading-6 text-[#9b6b82]">
        ${subtitle}
      </p>
    </div>
  `
}

function profileAvatar(name) {
  const initial = escapeHtml(
    String(name || 'M').trim().charAt(0).toUpperCase() || 'M'
  )

  return `
    <div class="relative shrink-0">
      <div class="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-pink-100 to-pink-200 shadow-lg shadow-pink-200/50 ring-1 ring-pink-100">
        <img
          src="./photo_de_profil.jpg"
          alt="Photo du profil de démonstration"
          class="h-full w-full rounded-full object-cover"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >
        <span
          class="hidden h-full w-full items-center justify-center text-2xl font-black text-[#be185d]"
          aria-hidden="true"
        >${initial}</span>
      </div>

      <span
        class="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-emerald-500 text-xs font-black text-white"
        title="Profil de démonstration"
        aria-label="Profil de démonstration"
      >✓</span>
    </div>
  `
}

function privacyPanel() {
  return `
    <div class="relative overflow-hidden rounded-2xl border border-pink-100 bg-gradient-to-br from-[#fff5f9] to-white p-4 sm:p-5">
      <div class="flex items-start gap-3">
        <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm ring-1 ring-pink-100" aria-hidden="true">
          🔒
        </div>

        <div class="min-w-0">
          <h3 class="font-extrabold text-[#632846]">
            Ta confidentialité compte
          </h3>
          <p class="mt-1 text-sm leading-6 text-[#9b6b82]">
            Cette version utilise des données de démonstration.
            Évite de saisir des informations personnelles réelles.
            Vérifie les règles de stockage de cette version avant
            d'y enregistrer des informations sensibles.
          </p>
        </div>
      </div>

      <div class="mt-4 grid gap-2 sm:grid-cols-2">
        <div class="flex items-center gap-2 rounded-xl bg-white/80 p-3 text-xs font-semibold text-[#632846] ring-1 ring-pink-100">
          <span aria-hidden="true">🛡️</span>
          <span>Prototype de sensibilisation</span>
        </div>

        <div class="flex items-center gap-2 rounded-xl bg-white/80 p-3 text-xs font-semibold text-[#632846] ring-1 ring-pink-100">
          <span aria-hidden="true">ℹ️</span>
          <span>Fonctions en mode démo</span>
        </div>
      </div>
    </div>
  `
}

function contactEmptyState() {
  return `
    <div class="rounded-2xl border border-dashed border-pink-200 bg-[#fffafd] px-5 py-8 text-center">
      <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-2xl" aria-hidden="true">
        🤝
      </div>

      <h3 class="mt-4 font-extrabold text-[#632846]">
        Ton cercle de confiance
      </h3>

      <p class="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#9b6b82]">
        Ajoute des contacts fictifs pour découvrir le fonctionnement
        de cette fonctionnalité dans la maquette.
      </p>

      <p class="mt-3 text-xs text-[#a67b90]">
        Aucun message ne sera envoyé.
      </p>
    </div>
  `
}

function resourceEmptyState() {
  return `
    <div class="rounded-2xl border border-dashed border-pink-200 bg-white p-6 text-center">
      <p class="text-2xl" aria-hidden="true">📚</p>
      <h3 class="mt-3 font-bold text-[#632846]">
        Ressources bientôt disponibles
      </h3>
      <p class="mt-1 text-sm leading-6 text-[#9b6b82]">
        Les contenus de sensibilisation seront affichés ici
        lorsqu'ils seront disponibles.
      </p>
    </div>
  `
}

function languageOption(value, current, label) {
  return `
    <option value="${value}" ${current === value ? 'selected' : ''}>
      ${label}
    </option>
  `
}

export function createProfilePage({ user, resources = [] }) {
  return {
    id: 'profile',
    watch: [],

    render({ services }) {
      const lang = services.preferences.getLanguage()
      const contacts = services.contacts.list() || []
      const name = String(user?.name || 'Utilisateur MAAK')
      const safeName = escapeHtml(name)
      const safeLang = lang === 'ar' ? 'ar' : 'fr'

      return `
        <section class="page space-y-7" data-profile-page>
          ${pageHeader({
            eyebrow: 'TON ESPACE PERSONNEL',
            title: 'Profil et confiance',
            subtitle: 'Personnalise ton expérience et retrouve les paramètres essentiels de ton espace MAAK.',
          })}

          <!-- Profil et préférences -->
          <div class="grid items-start gap-5 lg:grid-cols-[0.95fr_1.05fr]">

            <div class="min-w-0">
              ${card(`
                <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-50 via-white to-[#fff0f6] p-5 sm:p-6">
                  <div class="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-pink-100/60 blur-2xl"></div>

                  <div class="relative flex items-center gap-4">
                    ${profileAvatar(name)}

                    <div class="min-w-0 flex-1">
                      <div class="mb-2 inline-flex items-center gap-1.5 rounded-full border border-pink-100 bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#be185d]">
                        <span class="h-1.5 w-1.5 rounded-full bg-pink-500"></span>
                        Espace personnel
                      </div>

                      <h2 class="break-words text-xl font-black tracking-tight text-[#632846] sm:text-2xl">
                        ${safeName}
                      </h2>

                      <p class="mt-1 text-sm text-[#9b6b82]">
                        Profil fictif de démonstration
                      </p>
                    </div>
                  </div>

                  <div class="relative mt-5 rounded-xl border border-white/90 bg-white/80 p-3.5">
                    <div class="flex items-start gap-3">
                      <span class="text-lg" aria-hidden="true">🌸</span>
                      <p class="text-sm leading-6 text-[#80566c]">
                        MAAK est un espace de sensibilisation,
                        d'information et d'orientation.
                        Tu peux explorer les fonctionnalités de la
                        maquette sans utiliser de données réelles.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="mt-6">
                  <div class="mb-3 flex items-center gap-3">
                    <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-50 text-lg" aria-hidden="true">
                      🌐
                    </div>
                    <div>
                      <h3 class="font-extrabold text-[#632846]">
                        Langue de l'interface
                      </h3>
                      <p class="mt-0.5 text-xs text-[#9b6b82]">
                        Choisis ta langue préférée.
                      </p>
                    </div>
                  </div>

                  <label for="language" class="mb-2 block text-sm font-bold text-[#632846]">
                    Langue
                  </label>

                  <select
                    id="language"
                    name="language"
                    class="field w-full rounded-xl"
                    data-change="language"
                    aria-describedby="language-help"
                  >
                    ${languageOption('fr', safeLang, '🇫🇷 Français')}
                    ${languageOption('ar', safeLang, '🇹🇳 العربية (démo)')}
                  </select>

                  <p id="language-help" class="mt-2 text-xs leading-5 text-[#9b6b82]">
                    La disponibilité de la traduction arabe dépend
                    de l'intégration linguistique de l'application.
                  </p>
                </div>

                <div class="mt-6">
                  ${privacyPanel()}
                </div>

                <div class="mt-6 border-t border-pink-100 pt-5">
                  <div class="mb-3">
                    <h3 class="font-extrabold text-[#632846]">
                      Réinitialisation
                    </h3>
                    <p class="mt-1 text-sm leading-6 text-[#9b6b82]">
                      Efface les données locales de démonstration
                      gérées par le stockage de l'application.
                    </p>
                  </div>

                  ${button({
                    label: 'Effacer les données locales',
                    action: 'clear-local-data',
                    variant: 'soft',
                    className: 'w-full',
                  })}

                  <p class="mt-2 text-xs leading-5 text-[#a67b90]">
                    Cette action peut supprimer des préférences
                    ou des données enregistrées localement.
                  </p>
                </div>
              `, 'p-5 sm:p-6')}
            </div>

            <!-- Contacts de confiance -->
            <div class="min-w-0">
              ${card(`
                <div class="flex flex-wrap items-start justify-between gap-3">
                  <div class="flex items-start gap-3">
                    <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink-50 text-xl" aria-hidden="true">
                      💗
                    </div>

                    <div>
                      <h2 class="text-lg font-extrabold text-[#632846] sm:text-xl">
                        Contacts de confiance
                      </h2>
                      <p class="mt-1 text-sm text-[#9b6b82]">
                        Ton cercle de confiance
                      </p>
                    </div>
                  </div>

                  <span class="rounded-full border border-pink-100 bg-pink-50 px-3 py-1 text-xs font-bold text-[#be185d]">
                    ${contacts.length} contact${contacts.length > 1 ? 's' : ''}
                  </span>
                </div>

                <p class="mt-4 text-sm leading-6 text-[#9b6b82]">
                  Découvre comment organiser tes contacts de confiance.
                  Dans cette démo, les coordonnées saisies doivent
                  rester fictives.
                </p>

                <div class="mt-5">
                  ${contacts.length
                    ? `<div class="space-y-3">
                        ${contacts.map(c => contactCard(c, { manageable: true })).join('')}
                      </div>`
                    : contactEmptyState()
                  }
                </div>

                <div class="mt-5">
                  ${button({
                    label: '＋ Ajouter un contact',
                    action: 'add-contact',
                    variant: 'soft',
                    className: 'w-full',
                  })}
                </div>

                <div class="mt-4 flex items-start gap-2 rounded-xl bg-[#fff5f9] p-3.5">
                  <span class="mt-0.5" aria-hidden="true">ℹ️</span>
                  <p class="text-xs leading-5 text-[#9b6b82]">
                    Les contacts de cette maquette sont des exemples.
                    Aucun SMS, appel ou message d'urgence n'est envoyé.
                  </p>
                </div>
              `, 'p-5 sm:p-6')}
            </div>
          </div>

          <!-- Ressources -->
          <section aria-labelledby="profile-resources-heading">
            <div class="mb-5 flex items-start gap-3">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink-50 text-xl" aria-hidden="true">
                📚
              </div>

              <div>
                <h2 id="profile-resources-heading" class="text-xl font-black tracking-tight text-[#632846] sm:text-2xl">
                  Ressources de sensibilisation
                </h2>
                <p class="mt-1 text-sm leading-6 text-[#9b6b82]">
                  Des informations pour mieux comprendre les violences,
                  connaître ses droits et découvrir les ressources d'aide.
                </p>
              </div>
            </div>

            ${resources.length
              ? `<div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  ${resources.map(r => resourceCard(r)).join('')}
                </div>`
              : resourceEmptyState()
            }
          </section>

          <!-- Avertissement -->
          <footer class="rounded-2xl border border-pink-100 bg-gradient-to-r from-[#fff5f9] to-white p-4 sm:p-5">
            <div class="flex items-start gap-3">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm" aria-hidden="true">
                🛡️
              </div>

              <div>
                <h2 class="font-extrabold text-[#632846]">
                  Un prototype pour sensibiliser et orienter
                </h2>

                <p class="mt-1 text-sm leading-6 text-[#9b6b82]">
                  MAAK ne remplace pas les services d'urgence,
                  les professionnels de santé ou les associations
                  spécialisées. Les ressources présentées doivent être
                  vérifiées avant la publication de l'application.
                  Les fonctions de démonstration ne garantissent
                  pas la transmission d'une alerte.
                </p>
              </div>
            </div>
          </footer>
        </section>
      `
    },

    actions: {
      'add-contact'(_el, ctx) {
        const name = ctx.services.dialogs.ask(
          'Nom du contact fictif :'
        )

        if (!name?.trim()) return

        const relation = ctx.services.dialogs.ask(
          'Lien avec cette personne (ex. amie, sœur) :',
          'Personne de confiance'
        )

        if (relation === null) return

        const phone = ctx.services.dialogs.ask(
          'Téléphone fictif (ne pas saisir de numéro réel) :',
          '+216 00 000 000'
        )

        if (phone === null) return

        ctx.services.contacts.add({
          name: name.trim(),
          relation: relation.trim() || 'Personne de confiance',
          phone: phone.trim(),
        })

        ctx.refresh()
        ctx.toast('Contact fictif ajouté.')
      },

      'toggle-contact'(el, ctx) {
        const id = Number(el.dataset.id)

        if (!Number.isFinite(id)) {
          ctx.toast('Contact introuvable.')
          return
        }

        ctx.services.contacts.toggleAlerts(id)
        ctx.refresh()
        ctx.toast('Préférence du contact mise à jour.')
      },

      'clear-local-data'(_el, ctx) {
        const confirmed = ctx.services.dialogs.confirm(
          'Effacer les préférences et les données locales de démonstration sur ce navigateur ? Cette action peut être irréversible.'
        )

        if (!confirmed) return

        ctx.services.storage.clearAll()
        ctx.refresh()
        ctx.toast('Données locales de démonstration effacées.')
      },
    },

    changes: {
      language(el, ctx) {
        const language = el.value

        if (!['fr', 'ar'].includes(language)) return

        const updated = ctx.services.preferences.setLanguage(language)

        if (updated) {
          ctx.toast(
            language === 'ar'
              ? 'Arabe sélectionné (démo). Certaines sections peuvent rester en français.'
              : 'Français sélectionné.'
          )
        }
      },
    },
  }
}
