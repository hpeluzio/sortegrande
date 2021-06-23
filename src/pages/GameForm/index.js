import React, { useCallback, useEffect, useState } from 'react';
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
  GradientSend,
  ButtonText,
  ScrollView,
  NumbersContainer,
  NumberSquare,
  TextNumber,
  NameInput,
} from './styles';

import { Alert } from 'react-native';

export default function GameForm({ navigation }) {
  const selectedNumbers = useSelector(s => s.gameForm.selectedNumbers);
  const name = useSelector(s => s.gameForm.name);
  const dispatch = useDispatch();

  const [errorName, setErrorName] = useState(null);

  useEffect(() => {
    console.log('numbers: ', numbers);
    console.log('selectedNumbers: ', selectedNumbers);
    console.log('name: ', name);
  }, [selectedNumbers, name]);

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
      ? setErrorName(null)
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

  const submitForm = useCallback(() => {
    if (validateFieldName()) {
      console.log('SUBMIT');
    }
  }, [validateFieldName]);

  const isNumberSelected = useCallback(
    n => {
      if (selectedNumbers.includes(n)) {
        return true;
      }
      return false;
    },
    [selectedNumbers],
  );

  return (
    <Container>
      <TopHeader selectedNumbers={selectedNumbers} />
      <ScrollView>
        <Content>
          <NameInput
            label="Nome do jogo:"
            placeholder="Nome do jogo"
            onChangeText={n => dispatch(setGameNameForm({ name: n }))}
            value={name}
            errorMessage={errorName}
            onBlur={validateFieldName}
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
            <SubmitButton onPress={submitForm}>
              <GradientSend>
                <ButtonText>Enviar</ButtonText>
              </GradientSend>
            </SubmitButton>
          </SubmitContainer>
        </Content>
      </ScrollView>
    </Container>
  );
}
