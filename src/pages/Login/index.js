import React, { useEffect } from 'react';

import { Container, Back, Logo, Label, Username, Password } from './styles';

export default function Login({ navigation }) {
  useEffect(() => {
    console.log('navigation', navigation);
  }, [navigation]);

  return (
    <Container>
      {/* <Label>Sorte Grande - Login</Label> */}
      <Back />
      <Logo />
      <Label>Usuário</Label>
      <Username />
      <Label>Senha</Label>
      <Password />
    </Container>
  );
}
