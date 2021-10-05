import api from '~/config/api';

class GameService {
  async getAllMyGames() {
    const _response = await api
      .get('/game')
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response.data);
    return _response;
  }

  async create({ type, numbers, name, token, identificationNumber, cardFlag }) {
    const _response = await api
      .post('/game', {
        type,
        numbers,
        name,
        token,
        identificationNumber,
        cardFlag,
      })
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response.data);
    return _response;
  }

  async check({ id }) {
    const _response = await api
      .patch('/game', { id })
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response.data);
    return _response;
  }

  async delete(id) {
    const _response = await api
      .delete(`/game/${id}`)
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response.data);
    return _response;
  }
}

export default new GameService();
