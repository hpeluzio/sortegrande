import React, { useEffect } from 'react';

import TopHeader from '~/components/TopHeader';
import MenuFooter from '~/components/MenuFooter';

import {
  Container,
  Content,
  Row,
  Games,
  Item,
  ItemName,
  List,
  BookIcon,
  CreditCardIcon,
} from './styles';

export default function Home({ navigation }) {
  // useEffect(() => {
  //   console.log('navigation', navigation);
  // }, [navigation]);

  return (
    <Container>
      <TopHeader tittle={'Tela inicial'} />
      <Content>
        <Row>
          <Games onPress={() => navigation.navigate('MyGames')}>
            <List />
            <ItemName>Meus jogos</ItemName>
          </Games>
        </Row>
        <Row>
          <Item onPress={() => navigation.navigate('Login')}>
            <BookIcon />
            <ItemName>Sorteios cadastrados</ItemName>
          </Item>
          <Item onPress={() => navigation.navigate('PaymentForm')}>
            <CreditCardIcon />
            <ItemName>Fazer assinatura</ItemName>
          </Item>
        </Row>
      </Content>
      <MenuFooter />
    </Container>
  );
}
