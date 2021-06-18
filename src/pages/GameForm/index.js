import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGameForm } from '~/redux/actions/gameForm/gameFormActions';

import TopHeader from './TopHeader';
import MenuFooter from './MenuFooter';

import { numbers } from '~/utils/numbers';

import { Alert } from 'react-native';

import {
  Container,
  Content,
  SubmitContainer,
  // InputLabel,
  SubmitButton,
  Gradient,
  ButtonText,
  ScrollView,
  NumbersContainer,
  NumberSquare,
  TextNumber,
  SubmitForm,
} from './styles';

export default function GameForm({ navigation }) {
  // const [numbers, setNumbers] = useState(useSelector(s => s.gameForm.numbers));
  const selectedNumbers = useSelector(s => s.gameForm.selectedNumbers);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('numbers: ', numbers);
    console.log('selectedNumbers: ', selectedNumbers);
  }, [selectedNumbers]);

  const validateNumber = useCallback(
    n => {
      if (n === null) {
        return false;
      }

      if (typeof parseInt(n) !== 'number') {
        Alert.alert('Tipo diferente!', 'Insira um valor numérico.');
        return false;
      }

      if (parseInt(n) < 1) {
        Alert.alert('Número pequeno!', 'Insira um valor entre 1 e 60.');
        return false;
      }

      if (parseInt(n) > 60) {
        Alert.alert('Número grande!', 'Insira um valor entre 1 e 60.');
        return false;
      }

      if (selectedNumbers.length >= 21) {
        Alert.alert(
          'Já adicionado os 21 números!',
          'Não necessário adicionar outro.',
        );
        return false;
      }

      if (selectedNumbers.includes(parseInt(n))) {
        Alert.alert('Número já adicionado!', 'Insira outro número');
        return false;
      }

      return true;
    },
    [selectedNumbers],
  );

  const addNumber = useCallback(
    n => {
      if (selectedNumbers.includes(parseInt(n))) {
        dispatch(
          setGameForm({
            selectedNumbers: [...selectedNumbers].filter(numberToBeDeleted => {
              if (numberToBeDeleted == n) {
                return false;
              }
              return true;
            }),
          }),
        );
        return;
      }

      if (validateNumber(n)) {
        // setNumbers(s =>
        //   [...numbers, parseInt(number)].sort((a, b) => {
        //     return a - b;
        //   }),
        // );
        dispatch(
          setGameForm({
            selectedNumbers: [...selectedNumbers, parseInt(n)].sort((a, b) => {
              return a - b;
            }),
          }),
        );
      }
    },
    [selectedNumbers, validateNumber, dispatch],
  );

  const removeNumber = useCallback(
    n => {
      // console.log('n: ');
      // console.log('n: ', n);
      // const a = 5;
      dispatch(
        setGameForm({
          selectedNumbers: [...selectedNumbers].filter(numberToBeDeleted => {
            if (numberToBeDeleted == n) {
              return false;
            }
            return true;
          }),
        }),
      );
    },
    [selectedNumbers, dispatch],
  );

  const clear = useCallback(() => {
    dispatch(setGameForm({ selectedNumbers: [] }));
  }, [dispatch]);

  const submitForm = useCallback(() => {
    console.log('SUMIT');
  }, []);

  const isNumberSelected = useCallback(
    n => {
      if (selectedNumbers.includes(n)) {
        console.log('Include');
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
          {/* <InputLabel>Adicionar número</InputLabel> */}

          {/* <NumbersContainer>
          {numbers.map((n, index) => (
            <NumberSquare key={index} onPress={() => removeNumber(n)}>
              <TextNumber>{n}</TextNumber>
            </NumberSquare>
          ))}
        </NumbersContainer> */}

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
              <Gradient>
                <ButtonText>Limpar</ButtonText>
              </Gradient>
            </SubmitButton>
            <SubmitButton onPress={submitForm}>
              <Gradient>
                <ButtonText>OK</ButtonText>
              </Gradient>
            </SubmitButton>
          </SubmitContainer>
        </Content>
      </ScrollView>
      <MenuFooter />
    </Container>
  );
}
