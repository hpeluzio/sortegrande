import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setPaymentCardNumberForm,
  setPaymentExpireDateForm,
  setPaymentSecurityCodeForm,
  setPaymentCardHolderNameForm,
  setPaymentIdentificationNumberForm,
  setPaymentCardFlagForm,
} from '~/redux/actions/paymentForm/paymentFormActions';

import TopHeader from '~/components/TopHeader';
// import '~/config/reactotron';

import getCardFlag from '~/utils/getCardFlag';
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
  // Spacer,
} from './styles';

import { Alert } from 'react-native';
// import { colors } from '~/styles';

export default function PaymentForm({ navigation }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [securityCode, setSecurityCode] = useState('');

  const cardNumber = useSelector(s => s.paymentForm.cardNumber);
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

  // useEffect(() => {
  //   console.tron.log('identificationNumber:::: ', identificationNumber);
  // }, [identificationNumber]);

  const validateFieldCardNumber = useCallback(() => {
    var numberValidation = valid.number(cardNumber);
    // console.tron.log(numberValidation);
    // console.tron.log(numberValidation.card.type);
    if (cardNumber === '') {
      setErrorCardNumber('Número do cartão exigido.');
      return false;
    }

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
    if (securityCode === '') {
      setErrorSecurityCode('CVV exigido.');
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

  const confirmFlag = useCallback(async () => {
    const cardFlag = getCardFlag(cardNumber);
    console.log('cardFlag: ', cardFlag);

    if (cardFlag === false) {
      Alert.alert(
        'Bandeiras não encontrada.',
        'Bandeiras aceitas: \nMaster Card, Visa, American Express, Elo e Hypercard.',
        [
          {
            text: 'Ok',
            onPress: () => {
              return;
            },
          },
        ],
      );
    } else {
      dispatch(setPaymentCardFlagForm({ cardFlag: cardFlag }));
      confirmForm();
    }
  }, [dispatch, cardNumber, confirmForm]);

  const confirmForm = useCallback(async () => {
    if (validateForm() === true) {
      //Flag

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
          <ButtonSubmit onPress={confirmFlag}>
            <Gradient>
              {!loading && <ButtonText>Avançar</ButtonText>}
              {loading && <Loader />}
            </Gradient>
          </ButtonSubmit>
        </InputContainer>
      </Content>
    </Container>
  );
}
