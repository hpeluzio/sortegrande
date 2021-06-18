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
  PlayIcon,
} from './styles';

export default function Home({ navigation }) {
  useEffect(() => {
    console.log('navigation', navigation);
  }, [navigation]);

  return (
    <Container>
      <TopHeader />
      <Content>
        <Row>
          <Games onPress={() => navigation.navigate('MyGames')}>
            <List />
            <ItemName>Meus jogos</ItemName>
          </Games>
        </Row>
        <Row>
          <Item onPress={() => navigation.navigate('Login')}>
            <PlayIcon />
            <ItemName>Usuário</ItemName>
          </Item>
          <Item onPress={() => navigation.navigate('Login')}>
            <PlayIcon />
            <ItemName>Usuário</ItemName>
          </Item>
        </Row>
      </Content>
      <MenuFooter />
    </Container>
  );
}
