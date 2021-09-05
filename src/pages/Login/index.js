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
  CustomInputText,
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
    console.log('session: ', session);
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
      console.log('response: ', data.token);

      if (status === 200) {
        setErrorLog('');
        dispatch(setSession({ user: data.user, token: data.token }));
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

        <CustomInputText
          label={'E-mail:'}
          placeholder={'E-mail'}
          value={email}
          errorMessage={errorEmail}
          onChangeText={text => setEmail(text)}
          onBlur={validateFieldEmail}
          type={'Entypo'}
          icon={'mail'}
        />

        <CustomInputText
          label={'Senha:'}
          placeholder={'Senha'}
          value={password}
          errorMessage={errorPassword}
          onChangeText={text => setPassword(text)}
          onBlur={validateFieldPassword}
          type={'FontAwesome'}
          icon={'lock'}
          secureTextEntry={true}
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
        <SimpleButton onPress={() => navigation.navigate('ForgotPassword')}>
          <LockIcon />
          <InputLabel>Esqueceu a senha?</InputLabel>
        </SimpleButton>
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
