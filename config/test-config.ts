/**
 * Centralized test configuration
 * Supports environment-specific values via process.env
 */

export const TEST_CONFIG = {
  urls: {
    uiBase: process.env.UI_BASE_URL || 'https://qa.awarasleep.com',
    apiBase: process.env.API_BASE_URL || 'https://qa-api.residenthome.com',
  },

  timeouts: {
    elementVisibility: 5000,    // DOM elements appearing
    networkRequest: 15000,       // API calls
    domUpdate: 3000,             // DOM mutations
    modalDismissal: 5000,        // Modal animations
  },

  api: {
    brands: {
      awara: 'awara',
    },
    products: {
      awaraHybridMattress: 'the-awara-hybrid-mattress-30',
    },
  },
};
