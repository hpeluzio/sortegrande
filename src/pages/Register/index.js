import React, { useCallback, useState } from 'react';
import SessionService from '~/services/SessionService';

import TopHeader from '~/components/TopHeader';
import { validateEmail } from '~/utils/validateEmail';

import {
  ScrollView,
  InputContainer,
  AccountContainer,
  InputLabel,
  Email,
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  //Form validation fields
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(null);

  const validateFieldEmail = useCallback(async () => {
    if (validateEmail(email)) {
      setErrorEmail(null);

      const response = await SessionService.checkEmail({ email });
      if (response.data.available === false) {
        setErrorEmail('E-mail já cadastrado.');
        return false;
      }
    } else {
      setErrorEmail('Preencha seu e-mail corretamente.');
      return validateEmail(email);
    }
  }, [email]);

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
      validateFieldEmail() &&
      validateFieldPassword() &&
      validateFieldConfirmPassword()
    ) {
      return true;
    } else {
      return false;
    }
  }, [validateFieldEmail, validateFieldPassword, validateFieldConfirmPassword]);

  const register = useCallback(async () => {
    if (validateForm()) {
      setLoading(true);
      console.log('register: ', email, password);
      const response = await SessionService.register({
        email,
        password,
        confirm_password: confirmPassword,
      });

      // console.log('response: ', response);
      console.log('response.data: ', response.data);

      if (response.status === 201) {
        Alert.alert('Conta criada', 'Conta criada com sucesso', [
          {
            text: 'Fazer login',
            onPress: () => {
              navigation.navigate('Login');
            },
          },
        ]);
      } else {
        Alert.alert('Ocorreu algum erro', '', [
          {
            text: 'Fazer login',
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
  }, [validateForm, email, password, confirmPassword, navigation]);

  return (
    <ScrollView>
      <TopHeader tittle={'Criar Conta'} />
      <InputContainer>
        <Email
          label="E-mail"
          placeholder="E-mail"
          onChangeText={setEmail}
          value={email}
          errorMessage={errorEmail}
          onBlur={validateFieldEmail}
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
