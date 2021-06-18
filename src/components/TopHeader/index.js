import React from 'react';
import { withNavigation } from 'react-navigation';
// import { useSelector, useDispatch } from 'react-redux';
// import { setSession } from '~/redux/actions/session/sessionActions';

import { Container, Button, User, Back, Header } from './styles';

function TopHeader({ navigation, selectedNumbers }) {
  return (
    <Container>
      <Button onPress={() => navigation.goBack()}>
        <Back />
      </Button>
      {selectedNumbers && (
        <Header>Selecionados: {selectedNumbers.length}</Header>
      )}
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
