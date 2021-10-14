// API_URL=http://10.0.2.2:3333
// API_URL=https://api.bolaodasorte.online

export const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://10.0.2.2:3333'
    : 'https://api.bolaodasorte.online';
export const PUBLIC_KEY = 'TEST-5cfa7891-ec91-488e-9f6a-a27cf73ddec6';

// export const PAYMENT_METHODS_URL = 'https://paymentmethods.bolaodasorte.online';

// export const CREATE_CARD_TOKEN_URL =
//   'https://createcardtoken.bolaodasorte.online';

export const PAYMENT_METHODS_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://10.0.2.2:4444'
    : 'https://paymentmethods.bolaodasorte.online';

export const CREATE_CARD_TOKEN_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://10.0.2.2:4445'
    : 'https://createcardtoken.bolaodasorte.online';
