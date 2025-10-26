/**
 * Simple logging utility for tests
 */

export const logger = {
  info: (message: string, data?: unknown) => {
    console.log(`[INFO] ${message}`, data ?? '');
  },

  action: (message: string) => {
    console.log(`[ACTION] ${message}`);
  },

  verify: (message: string) => {
    console.log(`[VERIFY] ${message}`);
  },

  error: (message: string, error?: unknown) => {
    console.error(`[ERROR] ${message}`, error ?? '');
  },
};
