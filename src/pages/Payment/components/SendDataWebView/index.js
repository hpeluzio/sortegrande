import React, { useCallback, useEffect, useState } from 'react';

import UserService from '~/services/UserService';
import TopHeader from '~/components/TopHeader';
import { WebView } from 'react-native-webview';

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
  Spacer,
} from './styles';

import { Alert } from 'react-native';
import { colors } from '~/styles';

export default function SendDataWebView({ navigation }) {
  const [cardToken, setCardToken] = useState('');

  const [loading, setLoading] = useState(false);
  const [showWebView, setShowWebView] = useState(false);
  const [cardNumber, setCardNumber] = useState('4509953566233704');
  const [cardholderName, setCardHolderName] = useState('Namecard a abcdec');
  const [expireDate, setExpireDate] = useState('');
  const [secureCode, setSecureCode] = useState('');
  const [nameCard, setNameCard] = useState('');
  const [cpf, setCpf] = useState('');

  //Form validation fields
  const [errorCardNumber, setErrorCardNumber] = useState('');
  const [errorExpireDate, setErrorExpireDate] = useState('');
  const [errorSecureCode, setErrorSecureCode] = useState('');
  const [errorNameCard, setErrorNameCard] = useState('');
  const [errorCpf, setErrorCpf] = useState('');

  useEffect(() => {
    console.log('cardToken: ', cardToken);
    // Alert.alert(`cardToken: ${cardToken}`);
  }, [cardToken]);

  // useEffect(() => {
  //   console.log('cardNumber: ', cardNumber);
  //   console.log('expireDate: ', expireDate);
  //   console.log('secureCode: ', secureCode);
  //   console.log('nameCard: ', nameCard);
  //   console.log('cpf: ', cpf);
  // }, [cardNumber, expireDate, secureCode, nameCard, cpf]);

  // useEffect(() => {
  //   if (token === null) {
  //     navigation.navigate('Login');
  //   }
  // }, [navigation, token, user]);

  // cardNumber
  // ExpirationMonth
  // ExpirationYear
  // cardholderName Titular do cartão
  // Email
  // securityCode
  // issuer
  // Selecione o emissor
  // identificationType
  // Tipo de documento</option>
  // identificationNumber" id="form-checkout__identificationNumber
  // MPHiddenInputToken
  // MPHiddenInputPaymentMethod
  // transactionAmmount
  // description" name="description" type="hidden" value="product description

  // cardNumber: document.getElementById('form-checkout__cardNumber').value,
  // cardholderName: document.getElementById('form-checkout__cardholderName').value,
  // identificationType: document.getElementById('form-checkout__identificationType').value,
  // identificationNumber: document.getElementById('form-checkout__identificationNumber').value,
  // securityCode: document.getElementById('form-checkout__securityCode').value,
  // cardExpirationMonth: document.getElementById('form-checkout__cardExpirationMonth').value,
  // cardExpirationYear:

  const validateFieldCardNumber = useCallback(async () => {
    if (cardNumber !== '') {
      setErrorCardNumber('');
    } else {
      setErrorCardNumber('Número de cartão exigido.');
    }
  }, [cardNumber]);

  const validateFieldExpireDate = useCallback(async () => {
    if (expireDate !== '') {
      setErrorExpireDate('');
    } else {
      setErrorExpireDate('Data exigida.');
      // return validCard(expireDate);
    }
  }, [expireDate]);

  const validateFieldSecureCode = useCallback(async () => {
    if (secureCode.length !== 3) {
      setErrorSecureCode('3 números exigidos.');
    }

    if (secureCode === '') {
      setErrorSecureCode('CVV exigido.');
    }

    if (secureCode !== '' && secureCode.length === 3) {
      setErrorSecureCode('');
      // return validCard(expireDate);
    }
  }, [secureCode]);

  const validateFieldNameCard = useCallback(async () => {
    if (nameCard !== '') {
      setErrorNameCard('');
    } else {
      setErrorNameCard('Nome exigido.');
      // return validCard(expireDate);
    }
  }, [nameCard]);

  const validateFieldCpf = useCallback(async () => {
    if (cpf !== '') {
      setErrorCpf('');
    } else {
      setErrorCpf('CPF exigido.');
      // return validCard(expireDate);
    }
  }, [cpf]);

  const validateForm = useCallback(() => {
    if (
      validateFieldCardNumber() &&
      validateFieldExpireDate() &&
      validateFieldSecureCode() &&
      validateFieldNameCard() &&
      validateFieldCpf()
    ) {
      return true;
    } else {
      return false;
    }
  }, [
    validateFieldCardNumber,
    validateFieldExpireDate,
    validateFieldSecureCode,
    validateFieldNameCard,
    validateFieldCpf,
  ]);

  const sendPayment = useCallback(async () => {
    setShowWebView(true);
    if (validateForm()) {
      setLoading(true);
      setShowWebView(true);
      console.log('sendPayment::: ');

      const response = await UserService.update({
        cardNumber,
      });

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

      setLoading(false);
    }
  }, [validateForm, cardNumber]);

  const onMessage = useCallback(data => {
    console.log('data received from webview: ', data);
    return 'data';
  }, []);

  // const cardNumberr = '4509953566233704';

  const identificationType = 'CPF';
  const identificationNumber = '83535924014';
  const securityCode = '123';
  const cardExpirationMonth = '11';
  const cardExpirationYear = '2025';

  const runFirst = `
      document.body.style.backgroundColor = 'red';
      window.teste = 'teste';
      window.cardNumber = ${cardNumber};

      // window.cardholderName = 'Namecard a abcdec';
      // window.identificationType = 'CPF';
      // window.identificationNumber = '83535924014';
      // window.securityCode = '123';
      // window.cardExpirationMonth = '11';
      // window.cardExpirationYear = '2025';

      window.cardholderName = '${cardholderName}';
      window.identificationType = '${identificationType}';
      window.identificationNumber = '${identificationNumber}';
      window.securityCode = '${securityCode}';
      window.cardExpirationMonth = '${cardExpirationMonth}';
      window.cardExpirationYear = '${cardExpirationYear}';
      // setTimeout(function() { window.alert('hi' + window.cardholderName) }, 500);
      true; // note: this is required, or you'll sometimes get silent failures
    `;

  //Rendering
  if (showWebView === false) {
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
                onChangeText={text => setCardNumber(text)}
                onBlur={validateFieldCardNumber}
                type={'Feather'}
                icon={'credit-card'}
                keyboardType={'numeric'}
                attrs={{
                  type: 'credit-card',
                  options: {
                    obfuscated: false,
                    // issuer: 'amex',
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
                onChangeText={text => setExpireDate(text)}
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
                value={secureCode}
                errorMessage={errorSecureCode}
                onChangeText={text => setSecureCode(text)}
                onBlur={validateFieldSecureCode}
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
                    mask: '999',
                  },
                }}
              />
            </InputRow>
            <InputRow>
              <CustomInputText
                label={'Nome no cartão:'}
                placeholder={'Nome escrito cartão'}
                value={nameCard}
                errorMessage={errorNameCard}
                onChangeText={text => setNameCard(text)}
                onBlur={validateFieldNameCard}
                type={'MaterialCommunityIcons'}
                icon={'card-account-details-outline'}
              />
            </InputRow>

            <InputRow>
              <CustomInputText
                label={'CPF:'}
                placeholder="CPF"
                value={cpf}
                errorMessage={errorCpf}
                onChangeText={text => setCpf(text)}
                onBlur={validateFieldCpf}
                type={'FontAwesome5'}
                icon={'id-card'}
                keyboardType={'numeric'}
                attrs={{
                  type: 'cpf',
                }}
              />
            </InputRow>

            <Spacer />
            <ButtonSubmit onPress={sendPayment}>
              <Gradient>
                {!loading && <ButtonText>Enviar</ButtonText>}
                {loading && <Loader />}
              </Gradient>
            </ButtonSubmit>
          </InputContainer>
        </Content>
      </Container>
    );
  } else if (showWebView === true) {
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
          onMessage={event => {
            console.log('onMessage: ', event.nativeEvent.data);
            setCardToken(JSON.parse(event.nativeEvent.data).token);
            Alert.alert(event.nativeEvent.data);
          }}
        />
      </Container>
    );
  }
}