import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSession } from '~/redux/actions/session/sessionActions';
import SessionService from '~/services/SessionService';

import ModalAlert from '~/components/ModalAlert';
import { validateEmail } from '~/utils/validateEmail';

import {
  ScrollView,
  InputContainer,
  AccountContainer,
  Back,
  Logo,
  InputLabel,
  Email,
  Password,
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
      console.log('response: ', data);
      if (status === 200) {
        dispatch(setSession({ user: data.user, token: data.token.token }));
      }

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [dispatch, email, password, validateFieldEmail, validateFieldPassword]);

  return (
    <ScrollView>
      <InputContainer>
        <Back />
        <Logo />
        {/* <InputLabel>E-mail</InputLabel> */}
        <Email
          // label="E-mail"
          placeholder="E-mail "
          onChangeText={setEmail}
          value={email}
          errorMessage={errorEmail}
          onBlur={validateFieldEmail}
        />
        {/* <InputLabel>Senha</InputLabel> */}

        <Password
          // label="Senha"
          placeholder="Senha"
          onChangeText={setPassword}
          value={password}
          errorMessage={errorPassword}
          onBlur={validateFieldPassword}
        />
        <Button onPress={login}>
          <Gradient>
            {!loading && <ButtonText>Entrar</ButtonText>}
            {loading && <Loader />}
          </Gradient>
        </Button>
      </InputContainer>
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
