import React from 'react';
import { withNavigation } from 'react-navigation';
// import { useSelector, useDispatch } from 'react-redux';
// import { setSession } from '~/redux/actions/session/sessionActions';

import { Container, Button, User } from './styles';

function TopHeader({ navigation }) {
  return (
    <Container>
      <Button
        onPress={() => {
          console.log('OI');
          navigation.navigate('Account');
        }}>
        <User />
      </Button>
    </Container>
  );
}

export default withNavigation(TopHeader);
