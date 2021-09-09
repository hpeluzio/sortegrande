import React, { useCallback, useEffect, useState } from 'react';

import TopHeader from '~/components/TopHeader';
import '~/config/reactotron';

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

export default function Payment({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [cardNumber, setCardNumber] = useState('4235 6477 2802 5682');
  const [cardholderName, setCardHolderName] = useState('Cardholder Abcdec');
  const identificationType = 'CPF';
  const [identificationNumber, setIdentificationNumber] =
    useState('83535924014');
  const [securityCode, setSecurityCode] = useState('123');
  const [expireDate, setExpireDate] = useState('11/2025');
  const [cardExpirationMonth, setCardExpirationMonth] = useState('11');
  const [cardExpirationYear, setCardExpirationYear] = useState('2025');

  //Form validation fields
  const [errorCardNumber, setErrorCardNumber] = useState('');
  const [errorExpireDate, setErrorExpireDate] = useState('');
  const [errorSecurityCode, setErrorSecurityCode] = useState('');
  const [errorCardholderName, setErrorCardholderName] = useState('');
  const [errorIdentificationNumber, setErrorIdentificationNumber] =
    useState('');

  useEffect(() => {
    console.log('Payment screen');
    console.tron.log('Payment screen:::: ');
  }, []);

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

  const validateFieldSecurityCode = useCallback(async () => {
    if (securityCode.length !== 3) {
      setErrorSecurityCode('3 números exigidos.');
    }

    if (securityCode === '') {
      setErrorSecurityCode('CVV exigido.');
    }

    if (securityCode !== '' && securityCode.length === 3) {
      setErrorSecurityCode('');
      // return validCard(expireDate);
    }
  }, [securityCode]);

  const validateFieldCardholderName = useCallback(async () => {
    if (cardholderName !== '') {
      setErrorCardholderName('');
    } else {
      setErrorCardholderName('Nome exigido.');
      // return validCard(expireDate);
    }
  }, [cardholderName]);

  const validateFieldIdentificationNumber = useCallback(async () => {
    if (identificationNumber !== '') {
      setErrorIdentificationNumber('');
    } else {
      setErrorIdentificationNumber('CPF exigido.');
      // return validCard(expireDate);
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

  const confirmForm = useCallback(async () => {
    if (validateForm) {
      //Setting expire month and year
      const date = expireDate.split('/');
      setCardExpirationMonth(date[0]);
      setCardExpirationYear(date[1]);

      // console.tron.log('cardNumber: ', cardNumber);
      // console.tron.log('cardNumber: ', cardNumber.split(' ').join(''));

      console.tron.log(
        'CARD::::::: ',
        cardNumber.split(' ').join(''),
        cardholderName,
        identificationType,
        identificationNumber.split('.').join('').split('-').join(''),
        securityCode,
        cardExpirationMonth,
        cardExpirationYear,
      );

      console.tron.log(
        'CARD typeof::::::: ',

        typeof cardNumber,
        typeof cardholderName,
        typeof identificationType,
        typeof identificationNumber,
        typeof securityCode,
        typeof cardExpirationMonth,
        typeof cardExpirationYear,
      );

      Alert.alert('Deseja prosseguir', 'Isso pode levar alguns segundos', [
        {
          text: 'Não',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () =>
            navigation.navigate('CreateCardTokenWebView', {
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
              value={securityCode}
              errorMessage={errorSecurityCode}
              onChangeText={text => setSecurityCode(text)}
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
                  mask: '999',
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
              onChangeText={text => setCardHolderName(text)}
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
              onChangeText={text => setIdentificationNumber(text)}
              onBlur={validateFieldIdentificationNumber}
              type={'FontAwesome5'}
              icon={'id-card'}
              keyboardType={'numeric'}
              attrs={{
                type: 'cpf',
              }}
            />
          </InputRow>

          <Spacer />
          <ButtonSubmit onPress={confirmForm}>
            <Gradient>
              {!loading && <ButtonText>Enviar</ButtonText>}
              {loading && <Loader />}
            </Gradient>
          </ButtonSubmit>
        </InputContainer>
      </Content>
    </Container>
  );
}
