import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSession } from '~/redux/actions/session/sessionActions';

import TopHeader from '~/components/TopHeader';

import { Container, Content, Button, Logout, Label } from './styles';

export default function Account({ navigation }) {
  const token = useSelector(s => s.session.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token === null) {
      navigation.navigate('Login');
    }
  }, [navigation, token]);

  const logout = useCallback(() => {
    dispatch(setSession({ user: {}, token: null }));
  }, [dispatch]);

  return (
    <Container>
      <TopHeader tittle={'Perfil'} />
      <Content>
        <Button onPress={logout}>
          <Logout />
          <Label>Logout</Label>
        </Button>
      </Content>
    </Container>
  );
}
