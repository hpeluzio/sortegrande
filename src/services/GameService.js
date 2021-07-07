import api from '~/config/api';

class GameService {
  async index() {
    const _response = await api
      .get('/game')
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response.data);
    return _response;
  }

  async create({ numbers, name }) {
    const _response = await api
      .post('/game', { numbers, name })
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response.data);
    return _response;
  }
}

export default new GameService();
