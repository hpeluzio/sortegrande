import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setSession } from '~/redux/actions/session/sessionActions';

import { withNavigation } from 'react-navigation';

import { Container, Button, ButtonHighlighted, Clover, Back } from './styles';

function MenuFooter({ navigation }) {
  return (
    <Container>
      {/* <Button>
        <User />
      </Button> */}
      <ButtonHighlighted onPress={() => navigation.navigate('GameForm')}>
        <Clover />
      </ButtonHighlighted>
      <Button onPress={() => navigation.goBack()}>
        <Back />
      </Button>
    </Container>
  );
}
export default withNavigation(MenuFooter);
