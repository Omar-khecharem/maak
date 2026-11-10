
import './style.css'

import { createApp } from './core/app.js'
import { createStore } from './core/store.js'
import { navigationItems } from './config/navigation.js'

import { mockUser } from './data/mock-user.js'
import { mockAlerts } from './data/mock-alerts.js'
import { mockContacts } from './data/mock-contacts.js'
import { mockQuiz } from './data/mock-quiz.js'
import { mockResources } from './data/mock-resources.js'
import { botContent } from './data/mock-bot.js'

import { createStorageService } from './services/storage-service.js'
import { createAlertService } from './services/alert-service.js'
import { createContactService } from './services/contact-service.js'
import { createPreferencesService } from './services/preferences-service.js'
import { createQuizService, createInitialQuizState } from './services/quiz-service.js'
import { createDialogService } from './services/dialog-service.js'
import { createBotReplyService } from './services/bot-reply-service.js'
import { createVoiceRecorder } from './services/voice-recorder.js'

import { createChatBot } from './components/chat/chat-bot.js'
import { createHomePage } from './pages/home.js'
import { createGamePage } from './pages/game.js'
import { createAlertsPage } from './pages/alerts.js'
import { createProfilePage } from './pages/profile.js'
import { cloudflareAIService } from './services/cloudflare-ai-service.js';


const storage = createStorageService()
const services = {
  storage,
  alerts: createAlertService({ seed: mockAlerts }),
  contacts: createContactService({ storage, seed: mockContacts }),
  preferences: createPreferencesService({ storage }),
  quiz: createQuizService(mockQuiz),
  dialogs: createDialogService(),
}

const store = createStore({ page: 'home', chatOpen: false, quiz: createInitialQuizState() })

const chat = createChatBot({
  recorder: createVoiceRecorder(),
   replyService: cloudflareAIService,
  replyService: createBotReplyService({ replies: botContent.replies }),
  content: botContent,
  onToggle: chatOpen => store.set({ chatOpen }),
})

createApp({
  root: document.querySelector('#app'),
  store,
  services,
  chat,
  user: mockUser,
  navItems: navigationItems,
  pages: [
    createHomePage({ user: mockUser, resources: mockResources }),
    createGamePage(),
    createAlertsPage(),
    createProfilePage({ user: mockUser, resources: mockResources }),
  ],
})
