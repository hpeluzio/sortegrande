import React, { useCallback } from 'react';
import { withNavigation } from 'react-navigation';
import { useSelector } from 'react-redux';

import { Container, Button, User, Back, Header, Label, Empty } from './styles';

function TopHeader({ navigation, selectedNumbers, tittle }) {
  const token = useSelector(s => s.session.token);

  const navigate = useCallback(() => {
    const page = navigation.state.routeName;

    if ((!token && page !== 'Register') || (!token && page !== 'Login')) {
      navigation.navigate(token ? 'Home' : 'Login');
    }

    if (page !== 'PaymentConfirmation') {
      navigation.navigate('PaymentForm');
    }

    if (page !== 'Home' && page !== 'Login') {
      navigation.goBack();
    }
  }, [navigation, token]);

  return (
    <Container>
      <Button onPress={() => navigate()}>
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
