import React, { useCallback, useRef } from 'react';

import { WebView } from 'react-native-webview';

import { useDispatch } from 'react-redux';
import { setPaymentTokenForm } from '~/redux/actions/paymentForm/paymentFormActions';

import TopHeader from '~/components/TopHeader';
import { Container, HiddenWebView, LoadingGif } from './styles';
import LoadIndicator from '~/components/LoadIndicator';
import '~/config/reactotron';

// import { CREATE_TOKEN_URL } from '@env';

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

  const onMessage = useCallback(
    async event => {
      console.tron.log('onMessage: ', JSON.parse(event.nativeEvent.data).token);

      const tokenObj = JSON.parse(event.nativeEvent.data).token;

      sendPayment(tokenObj);
    },
    [sendPayment],
  );

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
              "TEST-5cfa7891-ec91-488e-9f6a-a27cf73ddec6"
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

  //Rendering
  return (
    <>
      <TopHeader tittle={'Processando pagamento'} />
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
