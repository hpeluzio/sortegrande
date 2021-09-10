import React, { useCallback, useEffect, useState } from 'react';
import { withNavigation } from 'react-navigation';
import { useSelector } from 'react-redux';

import '~/config/reactotron';

import {
  Container,
  Button,
  User,
  Back,
  Home,
  Header,
  Label,
  Empty,
} from './styles';

function TopHeader({ navigation, selectedNumbers, tittle }) {
  const token = useSelector(s => s.session.token);

  const [page] = useState(navigation.state.routeName);

  // useEffect(() => {
  //   console.tron.log(page);
  // }, [page]);

  const navigate = useCallback(() => {
    if ((!token && page !== 'Register') || (!token && page !== 'Login')) {
      navigation.navigate(token ? 'Home' : 'Login');
    }

    if (page === 'PaymentConfirmation') {
      navigation.navigate('PaymentForm');
    }

    if (page !== 'Home' && page !== 'Login') {
      navigation.goBack();
    }
  }, [navigation, page, token]);

  const topIcon = useCallback(() => {
    if (page === 'Home') {
      return <Home />;
    }

    return <Back />;
  }, [page]);

  return (
    <Container>
      <Button onPress={() => navigate()}>
        {/* {showIcon('Home') && <Home />}
        {showIcon('Back') && <Back />} */}
        {topIcon()}
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
