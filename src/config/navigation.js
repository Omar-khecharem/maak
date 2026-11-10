/** Configuration de la navigation (Open/Closed : ajouter un item sans toucher au composant). */
export const navigationItems = [
  
  { id: 'alerts', label: 'Alertes', icon: 'bell', page: 'alerts' },
  { id: 'game', label: 'Jeu', icon: 'game', page: 'game' },
  { id: 'home', label: 'Accueil', icon: 'home', page: 'home' },
  { id: 'profile', label: 'Profil', icon: 'user', page: 'profile' },
  { id: 'chat', label: 'Chat bot', icon: 'chat', action: 'toggle-chat', variant: 'chat' },
]
