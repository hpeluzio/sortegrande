import api from '~/config/api';

class PaymentService {
  async createSingleGamePayment({ token }) {
    console.log('createSingleGamePayment ');
    const _response = await api
      .post('/payment/singlegame', { token })
      .then(r => r)
      .catch(e => e.response);
    console.log('createSingleGamePayment: ', _response.data);
    return _response;
  }
}

export default new PaymentService();
