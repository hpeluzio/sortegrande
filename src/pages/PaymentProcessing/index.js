import React, { useCallback, useRef } from 'react';

import { WebView } from 'react-native-webview';

import { useDispatch } from 'react-redux';
import { setPaymentTokenForm } from '~/redux/actions/paymentForm/paymentFormActions';

import TopHeader from '~/components/TopHeader';
import { Container, HiddenWebView, LoadingGif } from './styles';
import LoadIndicator from '~/components/LoadIndicator';

import { PUBLIC_KEY } from '~/config/env';

export default function PaymentProcessing({ navigation }) {
  const dispatch = useDispatch();

  let webviewRef = useRef();

  if (!navigation.getParam('data')) {
    navigation.navigate('Payment');
  }

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
    tokenParam => {
      dispatch(setPaymentTokenForm({ token: tokenParam.id }));

      navigation.navigate('PaymentConfirmation');
    },
    [dispatch, navigation],
  );

  const JAVASCRIPT_TO_BE_INJECTED = `
      const createToken = async () => {
        const mp = new window.MercadoPago(
          '${PUBLIC_KEY}',
        );

        const token = await mp.createCardToken({
          cardNumber: '${cardNumber.split(' ').join('')}',
          cardholderName: '${cardholderName}',
          identificationType: '${identificationType}',
          identificationNumber: '${identificationNumber}',
          securityCode: '${securityCode}',
          cardExpirationMonth: '${cardExpirationMonth}',
          cardExpirationYear: '${cardExpirationYear}',
        });

        console.log('Token: ', token);

        window.ReactNativeWebView.postMessage(JSON.stringify({ token: token }));
      };

      createToken();

      true;
    `;

  const onMessage = useCallback(
    event => {
      const tokenObj = JSON.parse(event.nativeEvent.data).token;
      sendPayment(tokenObj);
    },
    [sendPayment],
  );

  //Rendering
  return (
    <>
      <TopHeader tittle={'Verificando dados'} />
      <Container>
        <LoadingGif />

        <HiddenWebView>
          <WebView
            // source={{
            //   uri: 'https://github.com/react-native-webview/react-native-webview',
            // }}
            source={{ uri: 'http://10.0.2.2:4445' }}
            renderLoading={LoadIndicator}
            // startInLoadingState={true}
            // injectedJavaScript={INJECTED_JAVASCRIPT}
            // injectedJavaScriptBeforeContentLoaded={INJECTED_JAVASCRIPT}
            onLoadEnd={e => {
              // console.log('end:', e.nativeEvent);
              webviewRef.injectJavaScript(JAVASCRIPT_TO_BE_INJECTED);
              // console.log(webviewRef);
            }}
            onMessage={event => onMessage(event)}
            ref={ref => (webviewRef = ref)}
          />
        </HiddenWebView>
      </Container>
    </>
  );
}
