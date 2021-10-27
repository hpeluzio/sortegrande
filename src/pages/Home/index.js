import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import TopHeader from '~/components/TopHeader';
import CloverBackground from '~/components/CloverBackground';
import messaging from '@react-native-firebase/messaging';

import {
  Container,
  Content,
  Row,
  Item,
  ItemName,
  List,
  // BookIcon,
  // CreditCardIcon,
  CloverIcon,
  PencilSignIcon,
} from './styles';

export default function Home({ navigation }) {
  const role = useSelector(s => s.session.user.role);

  useEffect(() => {
    console.log('role', role);
    showFcmToken();
  }, [showFcmToken]);

  const showFcmToken = useCallback(async () => {
    const fcmToken = await messaging().getToken();
    console.log('fcmToken: ', fcmToken);
  }, []);

  return (
    <Container>
      <TopHeader tittle={'Tela inicial'} />
      <Content>
        <Row>
          {/* <Item onPress={() => {}}>
            <BookIcon />
            <ItemName>Jogos cadastrados</ItemName>
          </Item> */}
          {/* <Item onPress={() => navigation.navigate('PaymentForm')}>
            <CreditCardIcon />
            <ItemName>Cadastrar pagamento</ItemName>
          </Item> */}
        </Row>
        <Row>
          <Item onPress={() => navigation.navigate('MyGames')}>
            <List />
            <ItemName>Meus jogos</ItemName>
          </Item>
        </Row>
        {role === 'admin' && (
          <Row>
            <Item
              onPress={() =>
                navigation.navigate('GameForm', { type: 'signature' })
              }>
              <PencilSignIcon />
              <ItemName>Fazer assinatura semanal de um jogo</ItemName>
            </Item>
          </Row>
        )}
        <Row>
          <Item
            onPress={() => navigation.navigate('GameForm', { type: 'single' })}>
            <CloverIcon />
            <ItemName>Fazer um jogo único</ItemName>
          </Item>
        </Row>
      </Content>
      {/* <MenuFooter /> */}
      <CloverBackground />
    </Container>
  );
}
