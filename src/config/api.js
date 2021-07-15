import axios from 'axios';

import { store } from '~/redux/store';

var instance = axios.create({
  // baseURL: 'http://localhost:3333',
  // baseURL: 'http://192.168.1.15:3333',
  // baseURL: 'http://10.0.2.2:3333',
  baseURL: 'http://10.0.2.2:3000',
  // baseURL: 'http://192.168.0.103:3333',
  timeout: 25000,
});

instance.defaults.headers['Content-Type'] = 'application/json';

instance.interceptors.request.use(async config => {
  const state = store.getState();
  // console.log('state: ', state);
  const token = await state.session.token;

  if (token) {
    config.headers.Authorization = `bearer ${await state.session.token}`;
  }

  return config;
});

export default instance;
