import React, { useEffect } from 'react';

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
  useEffect(() => {
    console.log('navigation', navigation);
  }, [navigation]);

  return (
    <ScrollView>
      <InputContainer>
        <Back />
        <Logo />
        <InputLabel>Usuário</InputLabel>
        <Username />
        <InputLabel>Senha</InputLabel>
        <Password />
        <Button onPress={() => {}}>
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
