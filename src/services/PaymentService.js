import api from '~/config/api';

class PaymentService {
  async createSingleGamePayment({ cardToken }) {
    console.log('createSingleGamePayment ');
    const _response = await api
      .post('/payment', { cardToken })
      .then(r => r)
      .catch(e => e.response);
    console.log('createSingleGamePayment: ', _response.data);
    return _response;
  }
}

export default new PaymentService();
