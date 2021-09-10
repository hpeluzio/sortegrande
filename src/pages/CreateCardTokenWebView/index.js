import React, { useCallback, useRef } from 'react';

import { WebView } from 'react-native-webview';

import { useDispatch } from 'react-redux';
import { setPaymentTokenForm } from '~/redux/actions/paymentForm/paymentFormActions';

import TopHeader from '~/components/TopHeader';
import { Container } from './styles';
import LoadIndicator from '~/components/LoadIndicator';
import '~/config/reactotron';

import { CREATE_TOKEN_URL } from '@env';

export default function CreateCardTokenWebView({ navigation }) {
  const dispatch = useDispatch();

  const webviewRef = useRef(null);

  const {
    cardNumber,
    cardholderName,
    identificationType,
    identificationNumber,
    securityCode,
    cardExpirationMonth,
    cardExpirationYear,
  } = navigation.getParam('data');

  const sendPayment = useCallback(
    async tokenParam => {
      dispatch(setPaymentTokenForm({ token: tokenParam.id }));

      navigation.navigate('PaymentConfirmation');
    },
    [dispatch, navigation],
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
      console.tron.log('onMessage: ', JSON.parse(event.nativeEvent.data).token);

      const tokenObj = JSON.parse(event.nativeEvent.data).token;

      sendPayment(tokenObj);
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
        source={{ uri: CREATE_TOKEN_URL }}
        renderLoading={LoadIndicator}
        startInLoadingState={true}
        // injectedJavaScript={runFirst}
        injectedJavaScriptBeforeContentLoaded={runFirst}
        onMessage={event => onMessage(event)}
        ref={webviewRef}
      />
    </Container>
  );
}
