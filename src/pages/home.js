
import { pageHeader } from '../components/ui/page-header.js'
import { badge } from '../components/ui/badge.js'
import { button } from '../components/ui/button.js'
import { card } from '../components/ui/card.js'
import { sectionHeading } from '../components/ui/section-heading.js'
import { sosButton } from '../components/features/sos-button.js'
import { deviceStatusCard } from '../components/features/device-status-card.js'
import { trustedContactsCard } from '../components/features/trusted-contacts-card.js'
import { resourceCard } from '../components/features/resource-card.js'
import { triggerDemoAlert } from '../components/features/trigger-demo-alert.js'

/* =========================================================
   MAAK — Présentation du projet
========================================================= */

function videoPresentation() {
  return `
    <section
      aria-labelledby="maak-presentation-title"
      class="relative isolate overflow-hidden rounded-[28px] border border-[#f4cfe0] bg-white shadow-[0_14px_45px_rgba(190,24,93,0.09)]"
    >
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#fce7f3] opacity-80 blur-3xl"
      ></div>

      <div class="relative p-4 sm:p-6 lg:p-7">

        <div class="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fce7f3] to-[#fbcfe8] text-2xl text-[#be185d]" aria-hidden="true">
              ♡
            </div>

            <div>
              <p class="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#be185d]">
                DÉCOUVRIR NOTRE PROJET
              </p>

              <h2
                id="maak-presentation-title"
                class="mt-1 text-xl font-black tracking-tight text-[#4a1d36] sm:text-2xl"
              >
                MAAK, bien plus qu’une application
              </h2>
            </div>
          </div>

          <span class="inline-flex items-center gap-2 rounded-full border border-[#f4d8e6] bg-[#fff5f9] px-3 py-2 text-xs font-bold text-[#9b4770]">
            <span class="h-2 w-2 rounded-full bg-[#ec4899]" aria-hidden="true"></span>
            Présentation du projet
          </span>
        </div>

        <div class="overflow-hidden rounded-[22px] bg-[#321225] shadow-[0_12px_35px_rgba(74,29,54,0.15)] ring-1 ring-[#e9b9d0]">
          <video
            id="maak-presentation-video"
            class="block aspect-video w-full object-contain"
            controls
            muted
            autoplay
            playsinline
            preload="auto"
            aria-label="Vidéo de présentation du projet MAAK"
          >
            <source src="/video_home.mp4" type="video/mp4" />
            Votre navigateur ne prend pas en charge la lecture vidéo.
          </video>
        </div>

        <div class="mt-5 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div class="min-w-0">
            <p class="text-xs font-extrabold uppercase tracking-[.16em] text-[#be185d]">
              Notre vision
            </p>

            <h3 class="mt-2 text-lg font-black leading-snug text-[#632846] sm:text-xl">
              La technologie au service de la sécurité des femmes.
            </h3>

            <p class="mt-2 max-w-2xl text-sm leading-7 text-[#9b6b82]">
              MAAK est un projet conçu pour contribuer à la prévention
              des violences faites aux femmes. L’application associe un
              parcours d’alerte SOS, des contacts de confiance, des
              ressources de sensibilisation et un concept de bracelet
              connecté pour faciliter l’accès à l’aide.
            </p>
          </div>

          <div class="grid grid-cols-3 gap-2 lg:w-[250px]">
            <div class="rounded-2xl border border-[#f7d9e7] bg-[#fff7fb] px-2 py-4 text-center">
              <div class="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#fce7f3] text-xl text-[#be185d]" aria-hidden="true">♡</div>
              <p class="mt-2 text-xs font-extrabold text-[#632846]">Prévention</p>
            </div>

            <div class="rounded-2xl border border-[#f7d9e7] bg-[#fff7fb] px-2 py-4 text-center">
              <div class="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#fce7f3] text-xl text-[#be185d]" aria-hidden="true">⌁</div>
              <p class="mt-2 text-xs font-extrabold text-[#632846]">Innovation</p>
            </div>

            <div class="rounded-2xl border border-[#f7d9e7] bg-[#fff7fb] px-2 py-4 text-center">
              <div class="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#fce7f3] text-xl text-[#be185d]" aria-hidden="true">✧</div>
              <p class="mt-2 text-xs font-extrabold text-[#632846]">Soutien</p>
            </div>
          </div>
        </div>

        <div class="mt-5 flex items-start gap-3 rounded-2xl border border-[#f4d8e6] bg-[#fff7fb] p-4">
          <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-[#be185d]" aria-hidden="true">ⓘ</span>

          <p class="text-xs leading-6 text-[#9b6b82]">
            <strong class="text-[#632846]">À propos de cette démonstration :</strong>
            certaines fonctionnalités sont simulées. Le bracelet,
            les notifications et les alertes réelles ne sont pas
            considérés comme opérationnels sans intégration effective
            et validation technique.
          </p>
        </div>
      </div>
    </section>
  `
}

/* =========================================================
   MAAK — Articles de sensibilisation
========================================================= */

function inspirationalArticles() {
  const articles = [
    {
      category: 'Sensibilisation',
      title: 'Reconnaître les signes d’une relation saine',
      description:
        'Comprendre les limites, le respect mutuel, le consentement et les signes d’une relation qui devient préoccupante.',
      icon: '♡',
      color: 'from-pink-50 to-rose-100',
      readTime: '5 min de lecture',
    },
    {
      category: 'Droits et prévention',
      title: 'Le consentement : une notion essentielle',
      description:
        'Pourquoi le consentement, le respect des choix et la liberté de dire non sont fondamentaux.',
      icon: '✧',
      color: 'from-purple-50 to-pink-100',
      readTime: '4 min de lecture',
    },
    {
      category: 'Bien-être',
      title: 'Comment soutenir une personne victime de violences',
      description:
        'Écouter sans juger, respecter ses décisions et l’aider à rechercher un accompagnement adapté.',
      icon: '🤝',
      color: 'from-rose-50 to-orange-50',
      readTime: '6 min de lecture',
    },
  ]

  return `
    <section aria-labelledby="maak-articles-title" class="space-y-4">
      <div class="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p class="text-xs font-extrabold uppercase tracking-[.18em] text-[#be185d]">
            COMPRENDRE ET AGIR
          </p>

          <h2 id="maak-articles-title" class="mt-1 text-xl font-black tracking-tight text-[#632846] sm:text-2xl">
            Articles à découvrir
          </h2>

          <p class="mt-1 max-w-xl text-sm leading-6 text-[#9b6b82]">
            Des repères pour mieux comprendre les violences et les relations respectueuses.
          </p>
        </div>

        <span class="rounded-full border border-pink-100 bg-white px-3 py-1.5 text-xs font-bold text-[#be185d]">
          3 articles
        </span>
      </div>

      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        ${articles.map(article => `
          <article class="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#f4d8e6] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-100/70">
            <div class="bg-gradient-to-br ${article.color} p-5">
              <div class="flex items-center justify-between gap-3">
                <span class="rounded-full border border-white/80 bg-white/80 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-[#9b4770]">
                  ${article.category}
                </span>

                <span class="text-2xl text-[#be185d]" aria-hidden="true">
                  ${article.icon}
                </span>
              </div>

              <div class="mt-4 h-1 w-12 rounded-full bg-[#ec4899]"></div>
            </div>

            <div class="flex flex-1 flex-col p-5">
              <h3 class="text-base font-extrabold leading-6 text-[#632846]">
                ${article.title}
              </h3>

              <p class="mt-2 flex-1 text-sm leading-6 text-[#9b6b82]">
                ${article.description}
              </p>

              <div class="mt-5 flex items-center justify-between gap-3 border-t border-pink-50 pt-4">
                <span class="text-xs text-[#a67b90]">
                  ${article.readTime}
                </span>

                <span class="text-sm font-bold text-[#be185d]" aria-hidden="true">
                  MAAK ✧
                </span>
              </div>
            </div>
          </article>
        `).join('')}
      </div>

      <p class="text-xs leading-5 text-[#a67b90]">
        Ces textes sont des contenus de démonstration. Ils devront
        être vérifiés et associés à des sources fiables avant publication.
      </p>
    </section>
  `
}

/* =========================================================
   MAAK — Femmes inspirantes
========================================================= */

function inspiringWomen() {
  const women = [
    {
      name: 'Wided Bouchamaoui',
      role: 'Entrepreneuriat tunisien',
      description:
        'Figure tunisienne du monde des affaires, elle a participé au Quartet du dialogue national tunisien, récompensé par le prix Nobel de la paix en 2015.',
      initials: 'WB',
      color: 'from-rose-100 to-pink-200',
    },
    {
      name: 'Tawakkol Karman',
      role: 'Droits humains et liberté',
      description:
        'Journaliste et militante yéménite, elle a reçu le prix Nobel de la paix en 2011 pour son engagement en faveur des droits et de la non-violence.',
      initials: 'TK',
      color: 'from-purple-100 to-pink-200',
    },
    {
      name: 'Malala Yousafzai',
      role: 'Éducation des filles',
      description:
        'Militante pakistanaise pour le droit des filles à l’éducation, elle est devenue la plus jeune lauréate du prix Nobel de la paix.',
      initials: 'MY',
      color: 'from-orange-100 to-rose-200',
    },
  ]

  return `
    <section aria-labelledby="maak-women-title" class="space-y-4">
      <div>
        <p class="text-xs font-extrabold uppercase tracking-[.18em] text-[#be185d]">
          DES PARCOURS QUI INSPIRENT
        </p>

        <h2 id="maak-women-title" class="mt-1 text-xl font-black tracking-tight text-[#632846] sm:text-2xl">
          Des femmes qui font la différence
        </h2>

        <p class="mt-1 max-w-2xl text-sm leading-6 text-[#9b6b82]">
          Découvre des parcours de femmes engagées pour les droits,
          l’éducation, la paix et la participation des femmes dans la société.
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        ${women.map(woman => `
          <article class="group relative overflow-hidden rounded-2xl border border-[#f4d8e6] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-100/70">
            <div aria-hidden="true" class="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#fff5f9] transition-colors group-hover:bg-pink-100/70"></div>

            <div class="relative flex items-center gap-4">
              <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${woman.color} text-lg font-black text-[#632846] ring-4 ring-white shadow-sm" aria-hidden="true">
                ${woman.initials}
              </div>

              <div class="min-w-0">
                <h3 class="font-extrabold leading-5 text-[#632846]">
                  ${woman.name}
                </h3>

                <p class="mt-1 text-xs font-semibold leading-5 text-[#be185d]">
                  ${woman.role}
                </p>
              </div>
            </div>

            <p class="relative mt-5 text-sm leading-6 text-[#9b6b82]">
              ${woman.description}
            </p>

            <div class="mt-4 flex items-center gap-2 border-t border-pink-50 pt-4 text-xs font-bold text-[#be185d]">
              <span aria-hidden="true">✧</span>
              <span>Un parcours inspirant</span>
            </div>
          </article>
        `).join('')}
      </div>

      <p class="text-xs leading-5 text-[#a67b90]">
        Les portraits sont des résumés introductifs. Des références
        vérifiées devront être ajoutées pour la version finale.
      </p>
    </section>
  `
}

/* =========================================================
   MAAK — Page d'accueil
========================================================= */

export function createHomePage({ user, resources = [] }) {
  return {
    id: 'home',
    watch: [],

    render({ services }) {
      const contacts = (services.contacts.list() || []).slice(0, 2)

      const firstName =
        user?.firstName ||
        user?.name?.trim().split(/\s+/)[0] ||
        'Bienvenue'

      return `
        <section class="page space-y-7">

          <!-- 1. En-tête d'accueil -->
          ${pageHeader({
            eyebrow: 'Ton espace de confiance',
            title: `Bonjour, ${firstName}`,
            titleSuffix: ' <span aria-hidden="true">🌸</span>',
            subtitle:
              'Tu mérites d’être écoutée, respectée et en sécurité.',
            actionHtml: badge('Mode prototype', 'amber'),
          })}

          <!-- 2. Présentation officielle de MAAK -->
          ${videoPresentation()}

          <!-- 3. SOS et état du dispositif -->
          <div class="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">

            ${card(`
              <div class="mb-4 inline-flex items-center gap-2 rounded-full bg-[#fce7f3] px-3 py-2 text-xs font-bold text-[#be185d]">
                <span class="h-2 w-2 rounded-full bg-[#ec4899]" aria-hidden="true"></span>
                Démonstration interactive
              </div>

              ${sosButton()}

              <h2 class="mt-7 text-xl font-extrabold text-[#632846]">
                Besoin d’aide ?
              </h2>

              <p class="mt-2 max-w-sm text-sm leading-6 text-[#9b6b82]">
                Teste le parcours SOS sans contacter qui que ce soit.
                Aucune alerte réelle ne sera envoyée par cette démonstration.
              </p>

              ${button({
                label: 'Tester une alerte',
                action: 'trigger-alert',
                className: 'mt-5 w-full max-w-xs',
              })}
            `, 'flex flex-col items-center px-5 py-7 text-center sm:px-8')}

            <div class="space-y-5">
              ${deviceStatusCard({
                name: 'Bracelet MAAK',
                status: 'Aucun appareil connecté',
                battery: 82,
              })}

              ${trustedContactsCard(contacts)}
            </div>
          </div>

          <!-- 4. Ressources de sensibilisation -->
          <section aria-labelledby="maak-resources-title">
            ${sectionHeading({
              eyebrow: 'S’informer, à son rythme',
              title: 'Petits repères utiles',
              linkLabel: 'Voir les ressources',
              linkPage: 'profile',
            })}

            ${
              resources.length
                ? `<div class="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                    ${resources.map((resource, index) =>
                      resourceCard(resource, {
                        variant: 'tile',
                        index,
                      })
                    ).join('')}
                  </div>`
                : `<div class="rounded-2xl border border-dashed border-pink-200 bg-white p-6 text-center">
                    <p class="text-sm leading-6 text-[#9b6b82]">
                      Les ressources de sensibilisation seront affichées ici dès qu’elles seront disponibles.
                    </p>
                  </div>`
            }
          </section>

          <!-- 5. Articles de sensibilisation -->
          ${inspirationalArticles()}

          <!-- 6. Femmes inspirantes -->
          ${inspiringWomen()}

          <!-- 7. Rappel de sécurité -->
          <footer class="rounded-2xl border border-[#f4d8e6] bg-gradient-to-r from-[#fff5f9] to-white p-4 sm:p-5">
            <div class="flex items-start gap-3">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm" aria-hidden="true">
                ♡
              </div>

              <div>
                <h2 class="font-extrabold text-[#632846]">
                  Tu mérites le respect et la sécurité.
                </h2>

                <p class="mt-1 text-sm leading-6 text-[#9b6b82]">
                  MAAK est un prototype de sensibilisation et d’orientation.
                  En cas de danger immédiat, recherche une aide d’urgence
                  adaptée à ta situation. Les fonctionnalités simulées
                  ne remplacent pas les services d’urgence ni les
                  associations spécialisées.
                </p>
              </div>
            </div>
          </footer>

        </section>
      `
    },

    actions: {
      'trigger-alert': triggerDemoAlert,
    },
  }
}
