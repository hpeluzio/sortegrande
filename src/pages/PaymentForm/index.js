import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { WebView } from 'react-native-webview';
import LoadIndicator from '~/components/LoadIndicator';

import {
  setPaymentCardNumberForm,
  setPaymentExpireDateForm,
  setPaymentSecurityCodeForm,
  setPaymentCardHolderNameForm,
  setPaymentIdentificationNumberForm,
  setPaymentMethods,
} from '~/redux/actions/paymentForm/paymentFormActions';

import TopHeader from '~/components/TopHeader';
// import '~/config/reactotron';

// import getCardFlag from '~/utils/getCardFlag';
// import cardFlagsMP from '~/utils/cardFlagsMP';
import valid from 'card-validator';
import { cpf } from 'cpf-cnpj-validator';

import {
  InputRow,
  Gradient,
  Loader,
  ButtonText,
  InputContainer,
  CustomInputText,
  Container,
  Content,
  ButtonSubmit,
  HiddenWebView,
  // Spacer,
} from './styles';

import { Alert } from 'react-native';
// import { colors } from '~/styles';

export default function PaymentForm({ navigation }) {
  const dispatch = useDispatch();
  const webviewRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [securityCode, setSecurityCode] = useState('');

  const cardNumber = useSelector(s => s.paymentForm.cardNumber);
  const paymentMethods = useSelector(s => s.paymentForm.paymentMethods);
  const expireDate = useSelector(s => s.paymentForm.expireDate);
  // const securityCode = useSelector(s => s.paymentForm.securityCode);
  const cardholderName = useSelector(s => s.paymentForm.cardholderName);
  const identificationNumber = useSelector(
    s => s.paymentForm.identificationNumber,
  );
  const identificationType = 'CPF';

  const [cardExpirationMonth, setCardExpirationMonth] = useState('');
  const [cardExpirationYear, setCardExpirationYear] = useState('');

  //Form validation fields
  const [errorCardNumber, setErrorCardNumber] = useState('');
  const [errorExpireDate, setErrorExpireDate] = useState('');
  const [errorSecurityCode, setErrorSecurityCode] = useState('');
  const [errorCardholderName, setErrorCardholderName] = useState('');
  const [errorIdentificationNumber, setErrorIdentificationNumber] =
    useState('');

  const [issuer, setIssuer] = useState('visa-or-mastercard');

  // useEffect(() => {
  //   console.log('paymentMethods:::', paymentMethods);
  // }, [paymentMethods]);

  useEffect(() => {
    if (
      Object.keys(paymentMethods).length > 0 &&
      paymentMethods.results[0].id === 'amex'
    ) {
      setIssuer('amex');
    } else {
      setIssuer('visa-or-mastercard');
    }
  }, [paymentMethods]);

  const validateFieldCardNumber = useCallback(() => {
    var numberValidation = valid.number(cardNumber);
    // console.tron.log(numberValidation);
    // console.tron.log(numberValidation.card.type);
    if (cardNumber === '') {
      setErrorCardNumber('Número do cartão exigido.');
      return false;
    }

    // if (getCardFlag(cardNumber) === false) {
    //   setErrorCardNumber(
    //     'Bandeira não encontrada. \nBandeiras aceitas: Master Card, Visa, American Express, Elo e Hypercard.',
    //   );
    //   return false;
    // }

    if (numberValidation.isPotentiallyValid === true) {
      setErrorCardNumber('');
      return true;
    }
  }, [cardNumber]);

  const validateFieldExpireDate = useCallback(() => {
    const month = Number(expireDate.split('/')[0]);
    const year = Number(expireDate.split('/')[1]);

    if (expireDate === '') {
      setErrorExpireDate('Data exigida.');
      return false;
    } else if (month < 1 || month > 12) {
      setErrorExpireDate('Mẽs inválido.');
      return false;
    } else if (year < 2020) {
      setErrorExpireDate('Ano expirado.');
      return false;
    } else {
      setErrorExpireDate('');
      return true;
    }
  }, [expireDate]);

  const validateFieldSecurityCode = useCallback(() => {
    // console.log('sec: ', securityCode);
    // console.log('CVV exigido:::', securityCode);
    if (securityCode === '') {
      setErrorSecurityCode('CVV exigido');
      return false;
    } else {
      setErrorSecurityCode('');
      return true;
    }
  }, [securityCode]);

  const validateFieldCardholderName = useCallback(() => {
    if (cardholderName === '') {
      setErrorCardholderName('Nome exigido.');
      return false;
    } else {
      setErrorCardholderName('');
      return true;
    }
  }, [cardholderName]);

  const validateFieldIdentificationNumber = useCallback(() => {
    // console.tron.log('validateFieldIdentificationNumber');
    if (identificationNumber === '') {
      setErrorIdentificationNumber('CPF exigido.');
      return false;
    } else if (!cpf.isValid(identificationNumber)) {
      // console.tron.log('!cpf.isValid');
      setErrorIdentificationNumber('CPF inválido.');
      return false;
    } else {
      setErrorIdentificationNumber('');
      return true;
    }
  }, [identificationNumber]);

  const validateForm = useCallback(() => {
    if (
      validateFieldCardNumber() &&
      validateFieldExpireDate() &&
      validateFieldSecurityCode() &&
      validateFieldCardholderName() &&
      validateFieldIdentificationNumber()
    ) {
      return true;
    } else {
      return false;
    }
  }, [
    validateFieldCardNumber,
    validateFieldExpireDate,
    validateFieldSecurityCode,
    validateFieldCardholderName,
    validateFieldIdentificationNumber,
  ]);

  const confirmForm = useCallback(() => {
    if (validateForm() === true) {
      //Flag
      // const cardFlag = getCardFlag(cardNumber);
      // dispatch(setPaymentCardFlagForm({ cardFlag: cardFlag }));

      //Security
      dispatch(setPaymentSecurityCodeForm({ securityCode: securityCode }));

      //Setting expire month and year
      const date = expireDate.split('/');
      setCardExpirationMonth(date[0]);
      setCardExpirationYear(date[1]);

      Alert.alert('Continuar', 'O processamento pode levar alguns segundos.', [
        {
          text: 'Não',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () =>
            navigation.navigate('PaymentProcessing', {
              data: {
                cardNumber: cardNumber.split(' ').join(''),
                cardholderName: cardholderName,
                identificationType: identificationType,
                identificationNumber: identificationNumber
                  .split('.')
                  .join('')
                  .split('-')
                  .join(''),
                securityCode: securityCode,
                cardExpirationMonth: cardExpirationMonth,
                cardExpirationYear: cardExpirationYear,
              },
            }),
        },
      ]);
    }

    setLoading(false);
  }, [
    dispatch,
    validateForm,
    navigation,
    cardNumber,
    cardholderName,
    identificationType,
    identificationNumber,
    securityCode,
    cardExpirationMonth,
    cardExpirationYear,
    expireDate,
  ]);

  const html = `
  <!DOCTYPE html>
    <html>
      <head>
        <title>getPaymentMethods MercadoPago</title>
        <script src="https://sdk.mercadopago.com/js/v2"></script>
      </head>

      <body>
        Processing......
        <script>
          
          const loadPaymentMethods = async () => {
            const mp = new window.MercadoPago(
              "TEST-5cfa7891-ec91-488e-9f6a-a27cf73ddec6"
            );

            const paymentMethods = await mp.getPaymentMethods({
              bin: '${cardNumber.split(' ').join('')}',
            });

            // alert(paymentMethods.results[0].id)

            window.ReactNativeWebView.postMessage(JSON.stringify({ paymentMethods: paymentMethods }));
          };

          loadPaymentMethods();
        </script>
      </body>
    </html>
  `;

  const onMessage = useCallback(
    event => {
      dispatch(
        setPaymentMethods({
          paymentMethods: JSON.parse(event.nativeEvent.data).paymentMethods,
        }),
      );
      // console.log('-----');
      // console.log('paymentMethods:', payMethods);
    },
    [dispatch],
  );

  //Rendering
  return (
    <Container>
      <TopHeader tittle={'Pagamento'} />
      <Content>
        <InputContainer>
          <InputRow>
            <CustomInputText
              label={'Número do cartão:'}
              placeholder="Número do cartão"
              value={cardNumber}
              errorMessage={errorCardNumber}
              onChangeText={n =>
                dispatch(setPaymentCardNumberForm({ cardNumber: n }))
              }
              onBlur={validateFieldCardNumber}
              type={'Feather'}
              icon={'credit-card'}
              keyboardType={'numeric'}
              attrs={{
                type: 'credit-card',
                options: {
                  obfuscated: false,
                  issuer: issuer,
                },
              }}
            />
          </InputRow>

          <InputRow>
            <CustomInputText
              label={'Validade:'}
              placeholder="Validade"
              errorMessage={errorExpireDate}
              value={expireDate}
              onChangeText={n =>
                dispatch(setPaymentExpireDateForm({ expireDate: n }))
              }
              onBlur={validateFieldExpireDate}
              type={'AntDesign'}
              icon={'calendar'}
              keyboardType={'numeric'}
              attrs={{
                type: 'datetime',
                options: {
                  format: 'MM/YYYY',
                },
              }}
            />
            <CustomInputText
              label={'Três dígitos:'}
              placeholder={'CVV'}
              value={securityCode}
              errorMessage={errorSecurityCode}
              onChangeText={cvv => setSecurityCode(cvv)}
              onBlur={validateFieldSecurityCode}
              type={'Entypo'}
              icon={'credit-card'}
              keyboardType={'numeric'}
              attrs={{
                type: 'custom',
                options: {
                  /**
                   * mask: (String | required | default '')
                   * the mask pattern
                   * 9 - accept digit.
                   * A - accept alpha.
                   * S - accept alphanumeric.
                   * * - accept all, EXCEPT white space.
                   */
                  // mask: '999 AAA SSS ***',
                  mask: '9999',
                },
              }}
            />
          </InputRow>
          <InputRow>
            <CustomInputText
              label={'Nome no cartão:'}
              placeholder={'Nome escrito cartão'}
              value={cardholderName}
              errorMessage={errorCardholderName}
              onChangeText={n =>
                dispatch(setPaymentCardHolderNameForm({ cardholderName: n }))
              }
              onBlur={validateFieldCardholderName}
              type={'MaterialCommunityIcons'}
              icon={'card-account-details-outline'}
            />
          </InputRow>

          <InputRow>
            <CustomInputText
              label={'CPF:'}
              placeholder="CPF"
              value={identificationNumber}
              errorMessage={errorIdentificationNumber}
              onChangeText={n =>
                dispatch(
                  setPaymentIdentificationNumberForm({
                    identificationNumber: n,
                  }),
                )
              }
              onBlur={validateFieldIdentificationNumber}
              type={'FontAwesome5'}
              icon={'id-card'}
              keyboardType={'numeric'}
              attrs={{
                type: 'cpf',
              }}
            />
          </InputRow>

          {/* <Spacer /> */}
          <ButtonSubmit onPress={confirmForm}>
            <Gradient>
              {!loading && <ButtonText>Avançar</ButtonText>}
              {loading && <Loader />}
            </Gradient>
          </ButtonSubmit>
        </InputContainer>
        {cardNumber !== '' && (
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
        )}
        {/* {cardNumber && loadPaymentMethods()} */}
      </Content>
    </Container>
  );
}
