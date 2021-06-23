import React from 'react';
import { withNavigation } from 'react-navigation';
import { useSelector } from 'react-redux';

import { Container, Button, User, Back, Header, Label, Empty } from './styles';

function TopHeader({ navigation, selectedNumbers, tittle }) {
  const token = useSelector(s => s.session.token);

  return (
    <Container>
      <Button onPress={() => navigation.navigate(token ? 'Home' : 'Login')}>
        <Back />
      </Button>
      {selectedNumbers && (
        <Header>Selecionados: {selectedNumbers.length}</Header>
      )}
      {tittle && <Label>{tittle}</Label>}
      {token ? (
        <Button
          onPress={() => {
            navigation.navigate('Account');
          }}>
          <User />
        </Button>
      ) : (
        <Empty />
      )}
    </Container>
  );
}

export default withNavigation(TopHeader);
