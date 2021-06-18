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

export default function MyGames({ navigation }) {
  useEffect(() => {
    // console.log('navigation', navigation);
  }, [navigation]);

  return (
    <Container>
      <TopHeader tittle={'Meus Jogos'} />
      <Content></Content>
      {/* <MenuFooter /> */}
    </Container>
  );
}
