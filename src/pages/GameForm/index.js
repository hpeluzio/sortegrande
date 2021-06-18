import React, { useCallback, useEffect } from 'react';
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
  Gradient,
  ButtonText,
  ScrollView,
  NumbersContainer,
  NumberSquare,
  TextNumber,
  InputLabel,
  NameInput,
} from './styles';

export default function GameForm({ navigation }) {
  const selectedNumbers = useSelector(s => s.gameForm.selectedNumbers);
  const name = useSelector(s => s.gameForm.name);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('numbers: ', numbers);
    console.log('selectedNumbers: ', selectedNumbers);
    console.log('name: ', name);
  }, [selectedNumbers, name]);

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

  const addNumber = useCallback(
    n => {
      console.log('selectedNumbers:::', selectedNumbers);
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

  const clear = useCallback(() => {
    dispatch(setGameForm({ selectedNumbers: [] }));
    dispatch(setGameNameForm({ name: '' }));
  }, [dispatch]);

  const submitForm = useCallback(() => {
    console.log('SUMIT');
  }, []);

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
          <InputLabel>Nome do jogo: </InputLabel>
          <NameInput
            onChangeText={n => dispatch(setGameNameForm({ name: n }))}
            value={name}
          />
          <SubmitContainer>
            <SubmitButton onPress={clear}>
              <Gradient>
                <ButtonText>Limpar</ButtonText>
              </Gradient>
            </SubmitButton>
            <SubmitButton onPress={submitForm}>
              <Gradient>
                <ButtonText>Enviar</ButtonText>
              </Gradient>
            </SubmitButton>
          </SubmitContainer>
        </Content>
      </ScrollView>
      {/* <MenuFooter /> */}
    </Container>
  );
}
