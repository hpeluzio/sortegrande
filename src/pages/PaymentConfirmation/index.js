import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

// import {
//   setGameForm,
//   setGameNameForm,
// } from '~/redux/actions/gameForm/gameFormActions';

import GameService from '~/services/GameService';
import TopHeader from '~/components/TopHeader';
// import '~/config/reactotron';

import {
  Scroll,
  Gradient,
  Loader,
  ButtonText,
  Container,
  Content,
  ButtonSubmit,
  Spacer,
  Row,
  Column,
  Info,
  InfoLabel,
  Numbers,
  NumberSquare,
  NumbersText,
} from './styles';

export default function PaymentConfirmation({ navigation }) {
  // const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const selectedNumbers = useSelector(s => s.gameForm.selectedNumbers);
  const name = useSelector(s => s.gameForm.name);

  const cardNumber = useSelector(s => s.paymentForm.cardNumber);
  const cardFlag = useSelector(s => s.paymentForm.cardFlag);
  const expireDate = useSelector(s => s.paymentForm.expireDate);
  const securityCode = useSelector(s => s.paymentForm.securityCode);
  const cardholderName = useSelector(s => s.paymentForm.cardholderName);
  const identificationNumber = useSelector(
    s => s.paymentForm.identificationNumber,
  );
  const token = useSelector(s => s.paymentForm.token);

  // useEffect(() => {
  //   console.tron.log('Confirm payment token: ', token);
  // }, [token]);

  const submitConfirmation = useCallback(async () => {
    if (loading === false) {
      setLoading(true);

      const cpf = identificationNumber.split('.').join('').split('-').join('');

      const response = await GameService.create({
        numbers: selectedNumbers,
        name: name,
        token: token,
        identificationNumber: cpf.toString(),
        cardFlag: cardFlag,
      });

      // console.tron.log('response.data: ', response.data);

      if (response.status === 200) {
        setLoading(false);
        // dispatch(setGameNameForm({ name: '' }));
        // dispatch(setGameForm({ selectedNumbers: [] }));
        gameCreatedAlert();
      } else {
        setLoading(false);
        gameErrorAlert(response.data);
      }
    }
  }, [
    loading,
    // dispatch,
    selectedNumbers,
    name,
    token,
    identificationNumber,
    cardFlag,
    gameCreatedAlert,
    gameErrorAlert,
  ]);

  const gameCreatedAlert = useCallback(() => {
    Alert.alert('Jogo criado!', 'Seu jogo foi criado com sucesso!', [
      {
        text: 'Ok',
        onPress: () => {
          navigation.navigate('Home');
        },
      },
    ]);
  }, [navigation]);

  const gameErrorAlert = useCallback((data = null) => {
    Alert.alert('Algo não ocorreu bem', 'Tente novamente', [
      {
        text: 'Ok',
        onPress: () => {
          // navigation.navigate('Home');
        },
      },
    ]);
  }, []);

  const maskCard = useCallback(num => {
    return num.replace(
      /([0-9]{4})[ ]([0-9]{4})[ ]([0-9]{4})[ ]([0-9]{4})/,
      '$1 **** **** $4',
    );
  }, []);

  //Rendering
  return (
    <>
      <Scroll>
        <Container>
          <TopHeader tittle={'Confirmar dados'} />
          <Content>
            <Row>
              <Column>
                <InfoLabel>Números selecionados: </InfoLabel>
                <Numbers>
                  {selectedNumbers.map((number, index) => {
                    return (
                      <NumberSquare key={index}>
                        <NumbersText>{number}</NumbersText>
                      </NumberSquare>
                    );
                  })}
                </Numbers>
              </Column>
            </Row>
            <Row>
              <Column>
                <InfoLabel>Nome do jogo:</InfoLabel>
                <Info>{name}</Info>
              </Column>
            </Row>
            <Row>
              <Column>
                <InfoLabel>Número do cartão:</InfoLabel>
                <Info>{maskCard(cardNumber)}</Info>
              </Column>
              <Column>
                <InfoLabel>Número do cartão:</InfoLabel>
                <Info>{cardFlag}</Info>
              </Column>
            </Row>
            <Row>
              <Column>
                <InfoLabel>Validade:</InfoLabel>
                <Info>{expireDate}</Info>
              </Column>
              <Column>
                <InfoLabel>Número de segurança: </InfoLabel>
                <Info>{securityCode}</Info>
              </Column>
            </Row>

            <Row>
              <Column>
                <InfoLabel>Nome no cartão:</InfoLabel>
                <Info>{cardholderName}</Info>
              </Column>
              <Column>
                <InfoLabel>CPF:</InfoLabel>
                <Info>{identificationNumber}</Info>
              </Column>
            </Row>

            {/* <Row>
              <InfoLabel>Token:</InfoLabel>
              <Info>{token}</Info>
            </Row> */}
            <Spacer />
            <ButtonSubmit onPress={submitConfirmation}>
              <Gradient>
                {!loading && <ButtonText>Efetuar pagamento</ButtonText>}
                {loading && <Loader />}
              </Gradient>
            </ButtonSubmit>
          </Content>
        </Container>
      </Scroll>
    </>
  );
}
