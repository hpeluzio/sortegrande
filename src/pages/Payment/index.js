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
  const [errorCardNumber, setErrorCardNumber] = useState(null);
  const [errorExpireDate, setErrorExpireDate] = useState(null);
  const [errorSecureCode, setErrorSecureCode] = useState(null);
  const [errorNameCard, setErrorNameCard] = useState('null');

  // useEffect(() => {
  //   setEmail(user.email);
  // }, [user.email]);

  // useEffect(() => {
  //   if (token === null) {
  //     navigation.navigate('Login');
  //   }
  // }, [navigation, token, user]);

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
    if (secureCode !== '') {
      setErrorSecureCode('');
    } else {
      setErrorSecureCode('CVV exigido.');
      // return validCard(expireDate);
    }
  }, [secureCode]);

  const validateFieldNameCard = useCallback(async () => {
    if (nameCard !== '') {
      setErrorNameCard('');
    } else {
      setErrorNameCard('Nome exidigo.');
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
              label={'Número do cartão'}
              placeholder="Número do cartão"
              value={cardNumber}
              errorMessage={errorCardNumber}
              onChangeText={text => setCardNumber(text)}
              onBlur={validateFieldCardNumber}
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
              label={'Validade'}
              placeholder="Validade"
              errorMessage={errorExpireDate}
              value={expireDate}
              onChangeText={text => setExpireDate(text)}
              onBlur={validateFieldExpireDate}
              attrs={{
                placeholderTextColor: colors.newLightBlack,
                type: 'datetime',
                options: {
                  format: 'MM/YYYY',
                },
              }}
            />
            <CustomInputText
              label={'Três dígitos'}
              placeholder={'CVV'}
              value={secureCode}
              errorMessage={errorSecureCode}
              onChangeText={text => setSecureCode(text)}
              onBlur={validateFieldSecureCode}
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
              label={'Nome no cartão'}
              placeholder={'Nome escrito cartão'}
              errorMessage={errorNameCard}
              onChangeText={text => setNameCard(text)}
              onBlur={validateFieldNameCard}
            />
          </InputRow>

          {/* <Spacer /> */}
          <ButtonSubmit onPress={sendPayment}>
            <Gradient>
              {!loading && <ButtonText>Enviar</ButtonText>}
              {loading && <Loader />}
            </Gradient>
          </ButtonSubmit>
          {/* <Button onPress={logout}>
            <Logout />
            <Label>Logout</Label>
          </Button> */}
        </InputContainer>
      </Content>
    </Container>
  );
}
