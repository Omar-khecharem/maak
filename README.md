# Maak — Modular Frontend Architecture

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue Version](https://img.shields.io/badge/Vue-3.5+-42b883.svg)](https://vuejs.org)
[![Vite](https://img.shields.io/badge/Vite-8.3+-646CFF.svg)](https://vitejs.dev)

**Maak** is a modular, SOLID-principle-driven frontend architecture demonstrating clean code practices, testability, and maintainable scaling. Built with vanilla JS modules and Vite, it provides a structured foundation for building complex web applications without framework lock-in.

---

## 📖 Table des Matières

- [À propos](#-à-propos)
- [Architecture SOLID](#-architecture-solid)
- [Structure du projet](#-structure-du-projet)
- [Premiers pas](#-premiers-pas)
- [Scripts disponibles](#-scripts-disponibles)
- [Stack technique](#-stack-technique)
- [Contribution](#-contribution)
- [Licence](#-licence)

---

## 🛠 À propos

Maak (qui signifie "fabrication" en arabe) est un modèle d'architecture frontend qui sépare les responsabilités à l'aide de principes SOLID établis. Le projet démontre comment construire une application évolutive avec :

- **Responsabilité unique** (SRC) — chaque module a une fonction clairement définie
- **Ouvert/Fermé** (OCP) — nouvelle fonctionnalité ajoutable sans modifier le code existant
- **Liskov** (LSP) — les pages respectent un contrat commun
- **Ségrégation des interfaces** (ISP) — les pages ne reçoivent que les dépendances nécessaires
- **Inversion des dépendances** (DIP) — les dépendances sont injectées, rendant le code testable

---

## 🏗 Architecture SOLID

| Principe | Application |
|----------|-------------|
| **S** — Responsabilité unique | `voice-recorder` gère l'enregistrement, `chat-composer` la saisie, `contact-service` la gestion des contacts. Pas de "fichier dieu" : `main.js` ne fait qu'assembler. |
| **O** — Ouvert/Fermé | Ajouter une page = créer un fichier et l'ajouter à la liste dans `main.js` + une ligne dans `config/navigation.js`. `core/app.js` ne change pas. |
| **L** — Substitution | Toutes les pages respectent le même contrat : `{ id, watch, render(ctx), actions?, changes? }` (vérifié par test). |
| **I** — Ségrégation des interfaces | Une page ne reçoit que `ctx = { store, services, toast, navigate, refresh }`. Le chat ne connaît que `recorder`, `replyService`, `content`. |
| **D** — Inversion des dépendances | Les services reçoivent leurs dépendances (`storage`, horloge, `random`, `MediaRecorder`, `dialogs`) : on peut les remplacer par des faux dans les tests, ou brancher une vraie IA à la place de `bot-reply-service`. |

---

## 📁 Structure du projet

```text
src/
├─ main.js               Racine de composition : assemble les implémentations (DIP)
├─ core/                 Noyau sans logique métier
│  ├─ app.js             Coordinateur : rendu, navigation, délégation d'évènements
│  ├─ store.js           État observable et immuable
│  ├─ dom.js             Utilitaires DOM purs
│  └─ format.js          Utilitaires de formatage
├─ config/navigation.js  Items de navigation (données)
├─ data/                 Données mock / fixtures
├─ services/             Logique métier, sans DOM, testable
│  ├─ storage-service    Abstraction de stockage (localStorage / sessionStorage)
│  ├─ alert-service      Gestion des alertes et notifications
│  ├─ contact-service    Service de gestion des contacts
│  ├─ preferences-service Préférences utilisateur
│  ├─ quiz-service       Moteur de quiz avec état initialisable
│  ├─ dialog-service     Gestion des dialogues modals
│  ├─ bot-reply-service  Stratégie de réponse du bot (remplaçable)
│  └─ voice-recorder     Enregistrement vocal (MediaRecorder)
├─ components/
│  ├─ ui/                Composants génériques : button, badge, card, page-header, toast, icons
│  ├─ layout/            app-shell, app-header, app-footer, bottom-nav
│  ├─ features/          Métier : sos-button, alert-card, contact-card, quiz-*
│  └─ chat/              chat-bot (orchestrateur) + message, liste, header, composer, barre d'enregistrement
├─ pages/                Pages complètes : home, game, alerts, profile
└─ style.css             Styles globaux (CSS modular)
```

### Composants UI (`src/components/ui/`)
- `button.js` — Bouton réutilisable avec variantes
- `badge.js` — Badge d'état
- `card.js` — Carte de contenu
- `page-header.js` — En-tête de page
- `toast.js` — notifications toast
- `icons.js` — Icônes Lucide React

### Pages (`src/pages/`)
Chaque page exporte un objet avec :
```js
{
  id: 'page-id',
  watch: [],          // clés d'état àobserver
  render(ctx) { ... }, // fonction de rendu
  actions: { ... },   // gestionnaires d'événements (optionnel)
  changes: { ... }    // gestionnaires de changement de champ (optionnel)
}
```

---

## ⚡ Premiers pas

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/Omar-khecharem/maak.git

# Installer les dépendances
cd maak
npm install
```

### Développement

```bash
# Lancer le serveur de développement Vite
npm run dev

# Ouvrir http://localhost:5173
```

### Construction

```bash
npm run build
```

### Preview

```bash
npm run preview
# Serve sur http://localhost:4173
```

---

## 🧪 Tests

Exécuter la suite de tests :

```bash
npm test
```

Les tests utilisent `node:test` (native, aucune dépendance externe requise) et couvrent le contrat des pages (`id`, `watch`, `render`, substitution LSP).

---

## 💻 Stack technique

| Catégorie | Technologies |
|-----------|-------------|
| **Runtime** | Node.js 18+, navigateurs modernes |
| **Build** | Vite 8.3+, ES modules |
| **UI** | Vanilla JS + Lucide icons |
| **State** | Store pattern observables (immutable) |
| **Testing** | `node:test` natif |
| **Architecture** | SOLID principles, Dependency Injection |

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Merci de :

1. Fork le dépôt
2. Créer une branche (`git checkout -b feature/ma-nouvelle-fonctionnalite`)
3. Commiter vos changements (`git commit -m 'Add: nouvelle fonctionnalité'`)
4. Pusher vers la branche (`git push origin feature/ma-nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

Respectez le style existant : composants pures `données → HTML`, événements délégués via `data-page`, `data-action`, `data-change`, et principes SOLID documentés.

---

## 📄 Licence

Distribué sous la licence **MIT**. Voir [`LICENSE`](LICENSE) pour plus d'informations.

---

**Made with ❤️ by Omar Khecharem**

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-@Omar-khecharem-181717.svg?style=for-the-badge&logo=github)](https://github.com/Omar-khecharem)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-0077B5.svg?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/omar-khecharem)

</div>