import api from '~/config/api';

class SessionService {
  async login({ email, password }) {
    const _response = await api
      .post('/user/login', { email, password })
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response);
    return _response;
  }

  async register({ email, password, confirm_password }) {
    const _response = await api
      .post('/user', { email, password, confirm_password })
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response.data);
    return _response;
  }

  async checkEmail({ email }) {
    const _response = await api
      .post('/user/checkemail', { email })
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response.data);
    return _response;
  }

  async forgotPassword({ email }) {
    const _response = await api
      .post('/password/forgot', { email })
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response.data);
    return _response;
  }

  async resetPassword({ token, password, confirm_password }) {
    const _response = await api
      .post('/password/reset', { token, password, confirm_password })
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response.data);
    return _response;
  }
}

export default new SessionService();
