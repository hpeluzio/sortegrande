import React, { useCallback, useState } from 'react';
import SessionService from '~/services/SessionService';

import TopHeader from '~/components/TopHeader';

import {
  ScrollView,
  InputContainer,
  AccountContainer,
  InputLabel,
  Token,
  Password,
  Gradient,
  Loader,
  ButtonSubmit,
  ButtonText,
  LoginIcon,
  Spacer,
  SimpleButton,
} from './styles';

import { Alert } from 'react-native';

export default function Register({ navigation }) {
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  //Form validation fields

  const [errorToken, setErrorToken] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(null);

  const validateFieldToken = useCallback(async () => {
    if (token !== null) {
      setErrorToken(null);
    } else {
      setErrorToken('Preencha o token.');
    }
  }, [token]);

  const validateFieldPassword = useCallback(() => {
    password.length >= 6
      ? setErrorPassword(null)
      : setErrorPassword('Forneça uma senha com 6 dígitos ou maior.');
    return password.length >= 6;
  }, [password]);

  const validateFieldConfirmPassword = useCallback(() => {
    confirmPassword === password
      ? setErrorConfirmPassword(null)
      : setErrorConfirmPassword('As senhas não conferem.');
    return confirmPassword === password;
  }, [password, confirmPassword]);

  const validateForm = useCallback(() => {
    if (
      validateFieldToken() &&
      validateFieldPassword() &&
      validateFieldConfirmPassword()
    ) {
      return true;
    } else {
      return false;
    }
  }, [validateFieldToken, validateFieldPassword, validateFieldConfirmPassword]);

  const register = useCallback(async () => {
    if (validateForm()) {
      setLoading(true);
      console.log('resetPassword: ', token, password);
      const response = await SessionService.resetPassword({
        token,
        password,
        confirm_password: confirmPassword,
      });

      // console.log('response: ', response);
      // console.log('response.data: ', response.data);

      if (response.status === 200) {
        Alert.alert('Senha atualizada', 'Senha atualizada com sucesso', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Login');
            },
          },
        ]);
      } else {
        Alert.alert('Ocorreu algum erro', '', [
          {
            text: 'OK',
            onPress: () => {
              console.log('Error: ', response.data);
            },
          },
        ]);
      }

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [validateForm, token, password, confirmPassword, navigation]);

  return (
    <ScrollView>
      <TopHeader tittle={'Criar Conta'} />
      <InputContainer>
        <Token
          label="Token"
          placeholder="Token"
          onChangeText={setToken}
          value={token}
          errorMessage={errorToken}
          onBlur={validateFieldToken}
        />

        <Password
          label="Senha"
          placeholder="Senha"
          onChangeText={setPassword}
          value={password}
          errorMessage={errorPassword}
          onBlur={validateFieldPassword}
        />
        <Password
          label="Confirmar senha"
          placeholder="Confirmar senha"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          errorMessage={errorConfirmPassword}
          onBlur={validateFieldConfirmPassword}
        />
        <ButtonSubmit onPress={register}>
          <Gradient>
            {!loading && <ButtonText>Enviar</ButtonText>}
            {loading && <Loader />}
          </Gradient>
        </ButtonSubmit>
        <Spacer />
        <AccountContainer>
          <SimpleButton onPress={() => navigation.navigate('Login')}>
            <LoginIcon />
            <InputLabel>Ir para login</InputLabel>
          </SimpleButton>
        </AccountContainer>
      </InputContainer>
    </ScrollView>
  );
}
