import React from 'react';
import { withNavigation } from 'react-navigation';
// import { useSelector, useDispatch } from 'react-redux';
// import { setSession } from '~/redux/actions/session/sessionActions';

import { Container, Button, Label } from './styles';

function TopHeader({ navigation, selectedNumbers }) {
  return (
    <Container>
      <Label>Selecionados: {selectedNumbers.length}</Label>
      <Button
        onPress={() => {
          navigation.navigate('Account');
        }}></Button>
    </Container>
  );
}

export default withNavigation(TopHeader);
