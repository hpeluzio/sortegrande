import React, { useCallback, useRef } from 'react';

import { WebView } from 'react-native-webview';

import { useDispatch } from 'react-redux';
import { setPaymentTokenForm } from '~/redux/actions/paymentForm/paymentFormActions';

import TopHeader from '~/components/TopHeader';
import { Container, HiddenWebView, LoadingGif } from './styles';
import LoadIndicator from '~/components/LoadIndicator';
// import '~/config/reactotron';

export default function PaymentProcessing({ navigation }) {
  const dispatch = useDispatch();

  const webviewRef = useRef(null);

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

  // const runFirst = `
  //     window.teste = 'teste';
  //     // window.cardNumber = ${cardNumber};
  //     // window.cardholderName = '${cardholderName}';
  //     // window.identificationType = '${identificationType}';
  //     // window.identificationNumber = '${identificationNumber}';
  //     // window.securityCode = '${securityCode}';
  //     // window.cardExpirationMonth = '${cardExpirationMonth}';
  //     // window.cardExpirationYear = '${cardExpirationYear}';
  //     true;
  //   `;

  const html = `
  <!DOCTYPE html>
    <html>
      <head>
        <title>Create Token MercadoPago</title>
        <script src="https://sdk.mercadopago.com/js/v2"></script>
      </head>

      <body>
        Processing......
        <script>
          
          const createToken = async () => {
            const mp = new window.MercadoPago(
              "APP_USR-9a1c0abd-ff0f-4b98-a66a-3d2a9e9a0197"
            );

            const token = await mp.createCardToken({
              cardNumber: '${cardNumber}',
              cardholderName: '${cardholderName}',
              identificationType: '${identificationType}',
              identificationNumber: '${identificationNumber}',
              securityCode: '${securityCode}',
              cardExpirationMonth: '${cardExpirationMonth}',
              cardExpirationYear: '${cardExpirationYear}',
            });

            // alert(token.id)

            window.ReactNativeWebView.postMessage(JSON.stringify({ token: token }));
          };

          createToken();
        </script>
      </body>
    </html>
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
            source={{ html: html }}
            renderLoading={LoadIndicator}
            startInLoadingState={true}
            // injectedJavaScript={runFirst}
            // injectedJavaScriptBeforeContentLoaded={runFirst}
            onMessage={event => onMessage(event)}
            ref={webviewRef}
          />
        </HiddenWebView>
      </Container>
    </>
  );
}
