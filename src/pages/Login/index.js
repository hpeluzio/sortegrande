import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSession } from '~/redux/actions/session/sessionActions';

import {
  ScrollView,
  InputContainer,
  AccountContainer,
  Back,
  Logo,
  InputLabel,
  AccountLabel,
  Username,
  Password,
  Gradient,
  // Loader,
  Button,
  ButtonText,
  LockIcon,
} from './styles';

export default function Login({ navigation }) {
  const token = useSelector(s => s.session.token);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('navigation', navigation);
    if (token !== null) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('Login');
    }
  }, [navigation, token]);

  const authentication = useCallback(() => {
    dispatch(setSession({ user: {}, token: 'token' }));
  }, [dispatch]);

  return (
    <ScrollView>
      <InputContainer>
        <Back />
        <Logo />
        <InputLabel>Usuário</InputLabel>
        <Username />
        <InputLabel>Senha</InputLabel>
        <Password />
        <Button onPress={authentication}>
          <Gradient>
            <ButtonText>Entrar</ButtonText>
            {/* <Loader /> */}
          </Gradient>
        </Button>
      </InputContainer>
      <AccountContainer>
        <LockIcon />
        <InputLabel>Esqueceu a senha?</InputLabel>
      </AccountContainer>
      <AccountContainer>
        <AccountLabel>Não possui uma conta?</AccountLabel>
        <InputLabel>Criar conta</InputLabel>
      </AccountContainer>
    </ScrollView>
  );
}
