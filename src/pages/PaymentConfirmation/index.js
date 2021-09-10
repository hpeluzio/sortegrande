import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import GameService from '~/services/GameService';

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
  Row,
  Info,
} from './styles';

import { Alert } from 'react-native';
// import { colors } from '~/styles';

export default function PaymentConfirmation({ navigation }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const selectedNumbers = useSelector(s => s.gameForm.selectedNumbers);
  const name = useSelector(s => s.gameForm.name);

  const cardNumber = useSelector(s => s.paymentForm.cardNumber);
  const expireDate = useSelector(s => s.paymentForm.expireDate);
  const securityCode = useSelector(s => s.paymentForm.securityCode);
  const cardholderName = useSelector(s => s.paymentForm.cardholderName);
  const identificationNumber = useSelector(
    s => s.paymentForm.identificationNumber,
  );
  const token = useSelector(s => s.paymentForm.token);

  useEffect(() => {
    console.tron.log('Confirm payment token: ', token);
  }, [token]);

  const submitConfirmation = useCallback(async () => {
    setLoading(true);

    const response = await GameService.create({
      numbers: selectedNumbers,
      name: name,
      token: token,
    });

    console.tron.log('response.data: ', response.data);

    if (response.status === 200) {
      console.log(' status 200');
      setLoading(true);
      gameCreatedAlert();
    } else {
      console.log(' status != 200');
      gameErrorAlert(response.data);
    }

    /*
     *
     */
  }, [selectedNumbers, name, token, gameCreatedAlert, gameErrorAlert]);

  const gameCreatedAlert = useCallback(() => {
    Alert.alert('Jogo criado!', 'Seu jogo foi criado com sucesso!', [
      {
        text: 'Ok',
        onPress: () => {
          navigation.navigate('MyGames');
        },
      },
    ]);
  }, [navigation]);

  const gameErrorAlert = useCallback((data = null) => {
    Alert.alert('Algo não ocorreu bem', `${data.message}`, [
      {
        text: 'Ok',
        onPress: () => {},
      },
    ]);
  }, []);

  //Rendering
  return (
    <Container>
      <TopHeader tittle={'Confirmar pagamento'} />
      <Content>
        <Spacer />
        <Row>
          <Info>{cardNumber}</Info>
        </Row>
        <Row>
          <Info>{expireDate}</Info>
        </Row>
        <Row>
          <Info>{securityCode}</Info>
        </Row>
        <Row>
          <Info>{cardholderName}</Info>
        </Row>
        <Row>
          <Info>{identificationNumber}</Info>
        </Row>
        <Row>
          <Info>{token}</Info>
        </Row>
        <ButtonSubmit onPress={submitConfirmation}>
          <Gradient>
            {!loading && <ButtonText>Enviar</ButtonText>}
            {loading && <Loader />}
          </Gradient>
        </ButtonSubmit>
      </Content>
    </Container>
  );
}
