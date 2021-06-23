import api from '~/config/api';

class UserService {
  async update({ email, password, confirm_password }) {
    const _response = await api
      .put('/user', { email, password, confirm_password })
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response.data);
    return _response;
  }
}

export default new UserService();
