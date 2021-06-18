import React, { useCallback, useEffect, useState } from 'react';

import TopHeader from '~/components/TopHeader';
import MenuFooter from '~/components/MenuFooter';

import { Alert } from 'react-native';

import {
  Container,
  Content,
  SubmitContainer,
  InputLabel,
  NumberInput,
  SubmitButton,
  Gradient,
  ButtonText,
  NumbersContainer,
  NumberSquare,
  TextNumber,
  SubmitForm,
} from './styles';

export default function GameForm({ navigation }) {
  const [number, setNumber] = useState(null);
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    // const numericNumber = parseInt(number);
    // setNumber(numericNumber);
  }, [number]);

  const validateNumber = useCallback(() => {
    setNumber(parseInt(number));

    if (number === null) {
      return false;
    }

    if (typeof parseInt(number) !== 'number') {
      Alert.alert('Tipo diferente!', 'Insira um valor numérico.');
      return false;
    }

    if (parseInt(number) < 1) {
      Alert.alert('Número pequeno!', 'Insira um valor entre 1 e 60.');
      return false;
    }

    if (parseInt(number) > 60) {
      Alert.alert('Número grande!', 'Insira um valor entre 1 e 60.');
      return false;
    }

    return true;
  }, [number]);

  const addNumber = useCallback(() => {
    console.log();
    if (validateNumber()) {
      setNumbers(s =>
        [...numbers, parseInt(number)].sort((a, b) => {
          return a - b;
        }),
      );
    }
  }, [number, numbers, validateNumber]);

  const clear = useCallback(() => {
    setNumber(s => 0);
    console.log(number);
    setNumbers([]);
  }, [number]);
  return (
    <Container>
      <TopHeader />
      <Content>
        <InputLabel>Adicionar número</InputLabel>
        <SubmitContainer>
          <NumberInput onChangeText={setNumber} value={number} />
          <SubmitButton onPress={addNumber}>
            <Gradient>
              <ButtonText>OK</ButtonText>
            </Gradient>
          </SubmitButton>
          {/* <SubmitButton onPress={clear}>
            <Gradient>
              <ButtonText>Limpar</ButtonText>
            </Gradient>
          </SubmitButton> */}
        </SubmitContainer>
        <NumbersContainer>
          {numbers.map((n, index) => (
            <NumberSquare key={index}>
              <TextNumber>{n}</TextNumber>
            </NumberSquare>
          ))}
        </NumbersContainer>
        <SubmitForm>
          {/* {numbers.map((n, index) => (
            <NumberSquare key={index}>
              <TextNumber>{n}</TextNumber>
            </NumberSquare>
          ))} */}
        </SubmitForm>
      </Content>
      <MenuFooter />
    </Container>
  );
}
