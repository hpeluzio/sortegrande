import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {
//   setPaymentCardNumberForm,
//   setPaymentExpireDateForm,
//   setPaymentSecurityCodeForm,
//   setPaymentCardHolderNameForm,
//   setPaymentIdentificationNumberForm,
// } from '~/redux/actions/paymentForm/paymentFormActions';

import TopHeader from '~/components/TopHeader';
import '~/config/reactotron';

import {
  Gradient,
  Loader,
  ButtonText,
  Container,
  Content,
  ButtonSubmit,
  Spacer,
} from './styles';

import { Alert } from 'react-native';
// import { colors } from '~/styles';

export default function PaymentConfirmation({ navigation }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const cardNumber = useSelector(s => s.paymentForm.cardNumber);
  const expireDate = useSelector(s => s.paymentForm.expireDate);
  const securityCode = useSelector(s => s.paymentForm.securityCode);
  const cardholderName = useSelector(s => s.paymentForm.cardholderName);
  const identificationNumber = useSelector(
    s => s.paymentForm.identificationNumber,
  );
  const token = useSelector(s => s.paymentForm.token);
  const identificationType = 'CPF';

  const [cardExpirationMonth, setCardExpirationMonth] = useState('11');
  const [cardExpirationYear, setCardExpirationYear] = useState('2025');

  useEffect(() => {
    console.tron.log('token: ', token);
  }, [token]);

  const confirmForm = useCallback(async () => {
    // const response = await PaymentService.createSingleGamePayment({
    //   token: token.id,
    // });
    //
    // console.tron.log('PaymentService response: ', response);
    //
    // if (response.status === 200) {
    //   Alert.alert(
    //     'Pagamento feito',
    //     'Pagamento feito com sucesso, aguarde a confirmação por e-mail.',
    //     [
    //       {
    //         text: 'Ok',
    //         onPress: () => {
    //           navigation.navigate('Home');
    //         },
    //       },
    //     ],
    //   );
    // } else {
    //   Alert.alert(
    //     'Ocorreu algum erro no pagamento',
    //     'Por favor, tente mais tarde',
    //     [
    //       {
    //         text: 'Ok',
    //         onPress: () => {
    //           navigation.goBack();
    //         },
    //       },
    //     ],
    //   );
    // }
    /*
     *
     */
  }, []);

  //Rendering
  return (
    <Container>
      <TopHeader tittle={'Pagamento'} />
      <Content>
        <Spacer />
        <ButtonSubmit onPress={confirmForm}>
          <Gradient>
            {!loading && <ButtonText>Enviar</ButtonText>}
            {loading && <Loader />}
          </Gradient>
        </ButtonSubmit>
      </Content>
    </Container>
  );
}
