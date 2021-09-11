import React, { useEffect } from 'react';

import TopHeader from '~/components/TopHeader';
import MenuFooter from '~/components/MenuFooter';

import {
  Container,
  Content,
  Row,
  Item,
  ItemName,
  List,
  BookIcon,
  // CreditCardIcon,
  CloverIcon,
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
          <Item onPress={() => navigation.navigate('Login')}>
            <BookIcon />
            <ItemName>Apostas cadastradas</ItemName>
          </Item>
          {/* <Item onPress={() => navigation.navigate('PaymentForm')}>
            <CreditCardIcon />
            <ItemName>Cadastrar pagamento</ItemName>
          </Item> */}
        </Row>
        <Row>
          <Item onPress={() => navigation.navigate('GameForm')}>
            <CloverIcon />
            <ItemName>Fazer um jogo</ItemName>
          </Item>
        </Row>
      </Content>
      {/* <MenuFooter /> */}
    </Container>
  );
}
