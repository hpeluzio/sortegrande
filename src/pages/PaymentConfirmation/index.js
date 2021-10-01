import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';

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
  SingleColumn,
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
  // const cardFlag = useSelector(s => s.paymentForm.cardFlag);
  const paymentMethods = useSelector(s => s.paymentForm.paymentMethods);
  const expireDate = useSelector(s => s.paymentForm.expireDate);
  const securityCode = useSelector(s => s.paymentForm.securityCode);
  const cardholderName = useSelector(s => s.paymentForm.cardholderName);
  const identificationNumber = useSelector(
    s => s.paymentForm.identificationNumber,
  );
  const token = useSelector(s => s.paymentForm.token);

  // useEffect(() => {
  //   console.log('paymentMethods: ', paymentMethods);
  // }, [paymentMethods]);

  const submitConfirmation = useCallback(async () => {
    if (loading === false) {
      setLoading(true);

      const cpf = identificationNumber.split('.').join('').split('-').join('');

      const response = await GameService.create({
        numbers: selectedNumbers,
        name: name,
        token: token,
        identificationNumber: cpf.toString(),
        cardFlag: paymentMethods.results[0].id,
      });

      // console.log('response.data: ', response.data);

      if (response.status === 200) {
        setLoading(false);
        // dispatch(setGameNameForm({ name: '' }));
        // dispatch(setGameForm({ selectedNumbers: [] }));
        gameCreatedAlert(response.data);
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
    // cardFlag,
    paymentMethods,
    gameCreatedAlert,
    gameErrorAlert,
  ]);

  const gameCreatedAlert = useCallback(
    gamePayment => {
      if (gamePayment.status === 'approved') {
        Alert.alert('Jogo criado!', 'Seu jogo foi criado com sucesso!', [
          {
            text: 'Ok',
            onPress: () => {
              navigation.navigate('Home');
            },
          },
        ]);
      }
      if (gamePayment.status === 'in_process') {
        Alert.alert(
          'Pagamento em processo!',
          'Seu pagamento está sendo processado com sucesso!',
          [
            {
              text: 'Ok',
              onPress: () => {
                navigation.navigate('Home');
              },
            },
          ],
        );
      }
    },
    [navigation],
  );

  const gameErrorAlert = useCallback((data = null) => {
    console.log('data', data);

    Alert.alert('Falha no pagamento ', `${data.message}`, [
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
              <SingleColumn>
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
              </SingleColumn>
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
                <InfoLabel>Bandeira:</InfoLabel>
                <Info>{paymentMethods.results[0].name}</Info>
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
