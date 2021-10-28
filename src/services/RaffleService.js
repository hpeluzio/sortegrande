import api from '~/config/api';

class RaffleService {
  async getTotalPrizeOfLastRaffle() {
    const _response = await api
      .get('/raffle/gettotalprize/last')
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response.data);
    return _response;
  }

  async getTotalPrizeOfSpecificRaffle({ id }) {
    const _response = await api
      .get(`/raffle/gettotalprize/${id}`)
      .then(r => r)
      .catch(e => e.response);
    // console.log(_response.data);
    return _response;
  }
}

export default new RaffleService();
