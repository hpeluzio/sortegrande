import api from '~/config/api';

class SessionService {
  async login({ email, password }) {
    const _response = await api
      .post('/login', { email, password })
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response);
    return _response;
  }

  async register({ email, password, confirm_password }) {
    const _response = await api
      .post('/register', { email, password, confirm_password })
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response.data);
    return _response;
  }

  async checkEmail({ email }) {
    const _response = await api
      .post('/check-email', { email })
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response.data);
    return _response;
  }
}

export default new SessionService();
