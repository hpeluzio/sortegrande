import axios from 'axios';

import { store } from '~/redux/store';
// import { API_URL } from '@env';

// console.log('NODE_ENV', process.env.NODE_ENV);

var instance = axios.create({
  // baseURL: 'http://localhost:3333',
  // baseURL: 'http://192.168.1.15:3333',
  // baseURL: API_URL,
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://10.0.2.2:3333'
      : 'https://api.bolaodasorte.online',
  // baseURL: 'http://10.0.2.2:3333',
  // baseURL: 'https://api.bolaodasorte.online',
  timeout: 25000,
});

instance.defaults.headers['Content-Type'] = 'application/json';

instance.interceptors.request.use(async config => {
  const state = store.getState();
  // console.log('state: ', state);
  const token = await state.session.token;
  // console.log('token: ', token);

  if (token) {
    config.headers.Authorization = `bearer ${await state.session.token}`;
  }

  return config;
});

export default instance;
