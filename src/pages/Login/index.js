import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSession } from '~/redux/actions/session/sessionActions';
import SessionService from '~/services/SessionService';

import {
  ScrollView,
  InputContainer,
  AccountContainer,
  Back,
  Logo,
  InputLabel,
  AccountLabel,
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

  useEffect(() => {
    console.log('session: ', session);
    // if (token !== null) {
    //   navigation.navigate('Home');
    // } else {
    //   navigation.navigate('Login');
    // }
  }, [session]);

  const login = useCallback(async () => {
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
  }, [dispatch, email, password]);

  return (
    <ScrollView>
      <InputContainer>
        <Back />
        <Logo />
        <InputLabel>E-mail</InputLabel>
        <Email placeholder="E-mail " onChangeText={setEmail} value={email} />
        <InputLabel>Senha</InputLabel>
        <Password
          placeholder="Senha"
          onChangeText={setPassword}
          value={password}
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
