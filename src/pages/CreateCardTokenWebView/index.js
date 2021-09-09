import React, { useCallback, useEffect, useState } from 'react';

import { Alert } from 'react-native';
import { WebView } from 'react-native-webview';

import PaymentService from '~/services/PaymentService';

import TopHeader from '~/components/TopHeader';
import { Container } from './styles';

export default function CreateCardTokenWebView({ navigation }) {
  const {
    cardNumber,
    cardholderName,
    identificationType,
    identificationNumber,
    securityCode,
    cardExpirationMonth,
    cardExpirationYear,
  } = navigation.getParam('data');

  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   // console.log('cardToken: ', cardToken);
  //   console.log('data: ', navigation.getParam('data'));
  //   // Alert.alert(`cardToken: ${cardToken}`);
  // }, [navigation]);

  const sendPayment = useCallback(
    async token => {
      setLoading(true);
      console.log('sending Payment::: ');

      const response = await PaymentService.createSingleGamePayment({
        cardToken: token,
      });

      console.log('response: ', response);

      Alert.alert(
        'Pagamento feito',
        'Pagamento feito com sucesso, aguarde a confirmação por e-mail.',
        [
          {
            text: 'Ok',
            onPress: () => {
              navigation.navigate('MyGames');
            },
          },
        ],
      );

      setLoading(false);
    },
    [navigation],
  );

  // const cardNumberr = '4509953566233704';

  const runFirst = `
      window.teste = 'teste';
      window.cardNumber = ${cardNumber};
      window.cardholderName = '${cardholderName}';
      window.identificationType = '${identificationType}';
      window.identificationNumber = '${identificationNumber}';
      window.securityCode = '${securityCode}';
      window.cardExpirationMonth = '${cardExpirationMonth}';
      window.cardExpirationYear = '${cardExpirationYear}';
      true; 
    `;

  const onMessage = useCallback(
    async event => {
      console.log('onMessage: ', event.nativeEvent.data);

      // Alert.alert(event.nativeEvent.data);
      // await PaymentService.createSingleGamePayment({
      //   cardToken: JSON.parse(event.nativeEvent.data).token,
      // });
      setTimeout(() => {
        sendPayment(JSON.parse(event.nativeEvent.data).token);
      }, 2000);
    },
    [sendPayment],
  );

  //Rendering
  return (
    <Container>
      <TopHeader tittle={'Pagamento'} />
      <WebView
        // source={{
        //   uri: 'https://github.com/react-native-webview/react-native-webview',
        // }}
        source={{ uri: 'http://10.0.2.2:3000/' }}
        // onMessage={event => {}}
        injectedJavaScript={runFirst}
        onMessage={event => onMessage(event)}
      />
    </Container>
  );
}
