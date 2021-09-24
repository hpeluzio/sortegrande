import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setGameForm,
  setGameNameForm,
} from '~/redux/actions/gameForm/gameFormActions';

import TopHeader from '~/components/TopHeader';

import { numbers } from '~/utils/numbers';

import {
  Container,
  Content,
  SubmitContainer,
  SubmitButton,
  GradientClear,
  GradientSendBlocked,
  GradientSend,
  ButtonText,
  ScrollView,
  NumbersContainer,
  NumberSquare,
  TextNumber,
  CustomInputText,
} from './styles';

import { Alert } from 'react-native';

export default function GameForm({ navigation }) {
  const selectedNumbers = useSelector(s => s.gameForm.selectedNumbers);
  const name = useSelector(s => s.gameForm.name);
  const dispatch = useDispatch();

  const [errorName, setErrorName] = useState('');

  const addNumber = useCallback(
    n => {
      if (selectedNumbers.includes(n)) {
        dispatch(
          setGameForm({
            selectedNumbers: [...selectedNumbers].filter(numberToBeDeleted => {
              if (numberToBeDeleted === n) {
                return false;
              }
              return true;
            }),
          }),
        );
        return;
      }

      if (validateNumber(n)) {
        dispatch(
          setGameForm({
            selectedNumbers: [...selectedNumbers, n].sort((a, b) => {
              return a - b;
            }),
          }),
        );
      }
    },
    [selectedNumbers, validateNumber, dispatch],
  );

  const validateFieldName = useCallback(() => {
    name !== ''
      ? setErrorName('')
      : setErrorName('Forneça um nome para o jogo.');
    return name !== '';
  }, [name]);

  const validateNumber = useCallback(
    n => {
      if (
        n === null ||
        typeof n !== 'number' ||
        n < 1 ||
        n > 60 ||
        selectedNumbers.length >= 21
      ) {
        return false;
      }

      return true;
    },
    [selectedNumbers],
  );

  const clear = useCallback(() => {
    Alert.alert('Limpar jogo', 'Deseja realmente limpar o jogo?', [
      {
        text: 'Cancelar',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Limpar',
        onPress: () => {
          dispatch(setGameForm({ selectedNumbers: [] }));
          dispatch(setGameNameForm({ name: '' }));
        },
      },
    ]);
  }, [dispatch]);

  const submitForm = useCallback(async () => {
    if (validateFieldName()) {
      navigation.navigate('PaymentForm');
    }
  }, [
    validateFieldName,
    navigation,
    // name,
    // selectedNumbers,
    // gameCreatedAlert,
    // gameErrorAlert,
  ]);

  const isNumberSelected = useCallback(
    n => {
      if (selectedNumbers.includes(n)) {
        return true;
      }
      return false;
    },
    [selectedNumbers],
  );

  const submitAlert = useCallback(() => {
    if (selectedNumbers.length !== 21) {
      Alert.alert('Aviso', 'Você pode jogar até 21 números.', [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => {
            submitForm();
          },
        },
      ]);

      return;
    }

    if (validateFieldName()) {
      Alert.alert('Continuar', 'Deseja prosseguir com este jogo?', [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => {
            submitForm();
          },
        },
      ]);
    }
  }, [selectedNumbers, submitForm, validateFieldName]);

  return (
    <Container>
      <TopHeader selectedNumbers={selectedNumbers} />
      <ScrollView>
        <Content>
          <CustomInputText
            label={'Nome/apelido do jogo:'}
            placeholder={'Nome do jogo'}
            errorMessage={errorName}
            onChangeText={n => dispatch(setGameNameForm({ name: n }))}
            onBlur={validateFieldName}
            value={name}
            type={'FontAwesome'}
            icon={'pencil-square-o'}
          />
          <NumbersContainer>
            {numbers.map((n, index) => (
              <NumberSquare
                key={index}
                onPress={() => addNumber(n)}
                isNumberSelected={isNumberSelected(n)}>
                <TextNumber isNumberSelected={isNumberSelected(n)}>
                  {n}
                </TextNumber>
              </NumberSquare>
            ))}
          </NumbersContainer>
          <SubmitContainer>
            <SubmitButton onPress={clear}>
              <GradientClear>
                <ButtonText>Limpar</ButtonText>
              </GradientClear>
            </SubmitButton>

            {selectedNumbers.length !== 21 ? (
              <SubmitButton onPress={submitAlert}>
                <GradientSendBlocked>
                  <ButtonText>Enviar</ButtonText>
                </GradientSendBlocked>
              </SubmitButton>
            ) : (
              <SubmitButton onPress={submitAlert}>
                <GradientSend>
                  <ButtonText>Avançar</ButtonText>
                </GradientSend>
              </SubmitButton>
            )}
          </SubmitContainer>
        </Content>
      </ScrollView>
    </Container>
  );
}
