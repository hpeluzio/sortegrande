/*
 * Test enviroment
 */
export const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://10.0.2.2:3333'
    : 'https://api.bolaodasorte.online';
export const PUBLIC_KEY = 'TEST-448447ef-4eeb-4828-9af9-18ec47f9bbb1';

/*
 * Production enviroment
 */
// export const API_URL = 'https://api.bolaodasorte.online';
// export const PUBLIC_KEY = '';

/*
 * PAYMENT_METHODS_URL and CREATE_CARD_TOKEN_URL
 */
export const PAYMENT_METHODS_URL = 'https://paymentmethods.bolaodasorte.online';
export const CREATE_CARD_TOKEN_URL =
  'https://createcardtoken.bolaodasorte.online';
