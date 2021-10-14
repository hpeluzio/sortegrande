// API_URL=http://10.0.2.2:3333
// API_URL=https://api.bolaodasorte.online

export const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://10.0.2.2:3333'
    : 'https://api.bolaodasorte.online';
export const PUBLIC_KEY = 'TEST-5cfa7891-ec91-488e-9f6a-a27cf73ddec6';
