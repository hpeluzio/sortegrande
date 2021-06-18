import React from 'react';
import { withNavigation } from 'react-navigation';
// import { useSelector, useDispatch } from 'react-redux';
// import { setSession } from '~/redux/actions/session/sessionActions';

import { Container, Button, User, Back, Header, Label } from './styles';

function TopHeader({ navigation, selectedNumbers, tittle }) {
  return (
    <Container>
      <Button onPress={() => navigation.goBack()}>
        <Back />
      </Button>
      {selectedNumbers && (
        <Header>Selecionados: {selectedNumbers.length}</Header>
      )}
      {tittle && <Label>{tittle}</Label>}
      <Button
        onPress={() => {
          navigation.navigate('Account');
        }}>
        <User />
      </Button>
    </Container>
  );
}

export default withNavigation(TopHeader);
