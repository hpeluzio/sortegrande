import React, { useCallback, useEffect, useState } from 'react';

import { Alert } from 'react-native';
import { WebView } from 'react-native-webview';

import PaymentService from '~/services/PaymentService';

import TopHeader from '~/components/TopHeader';
import { Container } from './styles';
import '~/config/reactotron';

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

  // useEffect(() => {
  //   // console.log('cardToken: ', cardToken);
  //   console.tron.log('navigation Param: ', navigation.getParam('data'));
  //   console.log('data: ', navigation.getParam('data'));
  //   // Alert.alert(`cardToken: ${cardToken}`);
  // }, [navigation]);

  const sendPayment = useCallback(
    async token => {
      console.log('sending Payment::: ');

      const response = await PaymentService.createSingleGamePayment({
        token: token,
      });

      console.tron.log('PaymentService response: ', response);

      if (response.status === 200) {
        Alert.alert(
          'Pagamento feito',
          'Pagamento feito com sucesso, aguarde a confirmação por e-mail.',
          [
            {
              text: 'Ok',
              onPress: () => {
                navigation.navigate('Home');
              },
            },
          ],
        );
      } else {
        Alert.alert(
          'Ocorreu algum erro no pagamento',
          'Por favor, tente mais tarde',
          [
            {
              text: 'Ok',
              onPress: () => {
                navigation.goBack();
              },
            },
          ],
        );
      }
    },
    [navigation],
  );

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
      // setTimeout(() => {
      sendPayment(JSON.parse(event.nativeEvent.data).token);
      // }, 2000);
    },
    [sendPayment],
  );

  //Rendering
  return (
    <Container>
      <TopHeader tittle={'Processando pagamento'} />
      <WebView
        // source={{
        //   uri: 'https://github.com/react-native-webview/react-native-webview',
        // }}
        source={{ uri: 'http://10.0.2.2:3003/' }}
        // onMessage={event => {}}
        injectedJavaScript={runFirst}
        onMessage={event => onMessage(event)}
      />
    </Container>
  );
}
