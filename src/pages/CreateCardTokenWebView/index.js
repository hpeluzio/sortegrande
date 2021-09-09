import React, { useCallback, useEffect, useState } from 'react';

import TopHeader from '~/components/TopHeader';
import { WebView } from 'react-native-webview';

import { Container } from './styles';

import { Alert } from 'react-native';

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
  const [cardToken, setCardToken] = useState('');

  // const [showWebView, setShowWebView] = useState(false);

  useEffect(() => {
    // console.log('cardToken: ', cardToken);
    console.log('data: ', navigation.getParam('data'));
    // Alert.alert(`cardToken: ${cardToken}`);
  }, [navigation]);

  const sendPayment = useCallback(async () => {
    setLoading(true);
    console.log('sending Payment::: ');

    // const response = await UserService.update({
    //   cardNumber,
    // });

    // console.log('response: ', response);
    // console.log('response: ', response);

    // if (response.status === 200) {
    //   Alert.alert(
    //     'Pagamento feito',
    //     'Pagamento feito com sucesso, aguarde a confirmação por e-mail.',
    //     [
    //       {
    //         text: 'Ok',
    //         onPress: () => {},
    //       },
    //     ],
    //   );
    // } else if (response.status !== 200) {
    //   Alert.alert('Ocorreu algum erro', '', [
    //     {
    //       text: 'Ok',
    //       onPress: () => {},
    //     },
    //   ]);
    // }

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
  }, [navigation]);

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
      setCardToken(JSON.parse(event.nativeEvent.data).token);
      // Alert.alert(event.nativeEvent.data);
      sendPayment();
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
