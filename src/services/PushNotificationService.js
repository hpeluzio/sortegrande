import api from '~/config/api';

class PushNotificationService {
  async addFcmToken({ fcmToken }) {
    console.log('addFcmToken: ');
    const _response = await api
      .post('/pushnotification/addfcmtoken', { token: fcmToken })
      .then(r => r)
      .catch(e => e.response);
    console.log(_response.data);
    return _response;
  }
}

export default new PushNotificationService();
