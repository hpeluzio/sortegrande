import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSession } from '~/redux/actions/session/sessionActions';
import SessionService from '~/services/SessionService';

import { validateEmail } from '~/utils/validateEmail';

import {
  ScrollView,
  Container,
  AccountContainer,
  Back,
  Logo,
  InputLabel,
  Email,
  Password,
  ErrorContainer,
  ErrorLog,
  Gradient,
  Loader,
  Button,
  ButtonText,
  LockIcon,
  AddUserIcon,
  SimpleButton,
} from './styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const token = useSelector(s => s.session.token);
  const session = useSelector(s => s.session);
  const dispatch = useDispatch();

  //Form validation
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorLog, setErrorLog] = useState('');

  useEffect(() => {
    // console.log('session: ', session);
  }, [session]);

  useEffect(() => {
    if (token !== null) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('Login');
    }
  }, [navigation, token, session]);

  const validateFieldEmail = useCallback(() => {
    validateEmail(email)
      ? setErrorEmail(null)
      : setErrorEmail('Preencha seu e-mail corretamente.');
    return validateEmail(email);
  }, [email]);

  const validateFieldPassword = useCallback(() => {
    password.length >= 6
      ? setErrorPassword(null)
      : setErrorPassword('Forneça uma senha com 6 dígitos ou maior.');
    return password.length >= 6;
  }, [password]);

  const login = useCallback(async () => {
    if (validateFieldEmail() && validateFieldPassword()) {
      setLoading(true);
      console.log('login: ', email, password);
      const { status, data } = await SessionService.login({ email, password });
      console.log('Response data: ', data);
      console.log('response: ', data.access_token);

      if (status === 200) {
        setErrorLog('');
        dispatch(setSession({ user: data, token: data.access_token }));
      } else if (status === 401) {
        setErrorLog('Login ou senha incorretos.');
      } else {
        setErrorLog('Ocorreu algum erro.');
      }

      setTimeout(() => {
        setLoading(false);
      }, 250);
    }
  }, [dispatch, email, password, validateFieldEmail, validateFieldPassword]);

  return (
    <ScrollView>
      <Container>
        <Back />
        <Logo />
        <Email
          // label="E-mail"
          placeholder="E-mail "
          onChangeText={setEmail}
          value={email}
          errorMessage={errorEmail}
          onBlur={validateFieldEmail}
        />
        <Password
          // label="Senha"
          placeholder="Senha"
          onChangeText={setPassword}
          value={password}
          errorMessage={errorPassword}
          onBlur={validateFieldPassword}
        />
        {errorLog !== '' && (
          <ErrorContainer>
            <ErrorLog>{errorLog}</ErrorLog>
          </ErrorContainer>
        )}
        <Button onPress={login}>
          <Gradient>
            {!loading && <ButtonText>Entrar</ButtonText>}
            {loading && <Loader />}
          </Gradient>
        </Button>
      </Container>
      <AccountContainer>
        <LockIcon />
        <InputLabel>Esqueceu a senha?</InputLabel>
      </AccountContainer>
      <AccountContainer>
        <SimpleButton onPress={() => navigation.navigate('Register')}>
          <AddUserIcon />
          <InputLabel>Criar conta</InputLabel>
        </SimpleButton>
      </AccountContainer>
    </ScrollView>
  );
}
