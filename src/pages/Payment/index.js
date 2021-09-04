import React, { useCallback, useState } from 'react';

import UserService from '~/services/UserService';
import TopHeader from '~/components/TopHeader';

import { valid as validCard } from 'card-validator';

import {
  InputRow,
  // CardNumber,
  // ExpireDate,
  // SecureCode,
  // NameCard,
  Gradient,
  Loader,
  ButtonText,
  InputContainer,
  Container,
  Content,
  ButtonSubmit,
  Spacer,
  // CalendarIcon,
  // CardIcon,
  // SecureCodeIcon,
  // NameIcon,
  // ErrorField,
  // ErrorMessage,
  CustomInputText,
} from './styles';

import { Alert } from 'react-native';
import { colors } from '~/styles';

export default function Payment({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [secureCode, setSecureCode] = useState('');
  const [nameCard, setNameCard] = useState('');

  //Form validation fields
  const [errorCardNumber, setErrorCardNumber] = useState('');
  const [errorExpireDate, setErrorExpireDate] = useState('');
  const [errorSecureCode, setErrorSecureCode] = useState('');
  const [errorNameCard, setErrorNameCard] = useState('');

  // useEffect(() => {
  //   setEmail(user.email);
  // }, [user.email]);

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
      return validCard(cardNumber);
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

  const validateForm = useCallback(() => {
    if (
      validateFieldCardNumber() &&
      validateFieldExpireDate() &&
      validateFieldSecureCode() &&
      validateFieldNameCard()
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
  ]);

  const sendPayment = useCallback(async () => {
    if (validateForm()) {
      setLoading(true);
      console.log('update: ');
      const response = await UserService.update({
        cardNumber,
      });

      // console.log('response: ', response);
      // console.log('response: ', response);

      if (response.status === 200) {
        Alert.alert(
          'Pagamento feito',
          'Pagamento feito com sucesso, aguarde a confirmação por e-mail.',
          [
            {
              text: 'Ok',
              onPress: () => {},
            },
          ],
        );
      } else if (response.status !== 200) {
        Alert.alert('Ocorreu algum erro', '', [
          {
            text: 'Ok',
            onPress: () => {},
          },
        ]);
      }

      setLoading(false);
    }
  }, [validateForm, cardNumber]);

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
              type={'Octicons'}
              icon={'credit-card'}
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
}
