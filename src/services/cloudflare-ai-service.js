
const API_URL = 'https://api.cloudflare.com/client/v4/user/tokens/verify';

export const cloudflareAIService = {
  delay: 0,

  async reply(message) {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error('Erreur API Cloudflare');
    }

    const data = await response.json();
    return data.reply;
  },
};
