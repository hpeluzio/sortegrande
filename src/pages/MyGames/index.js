import React, { useCallback, useEffect, useState } from 'react';

import GameService from '~/services/GameService';

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
  const [games, setGames] = useState([]);

  useEffect(() => {
    getMyGames();
    // console.log('navigation', navigation);
  }, [getMyGames]);

  const getMyGames = useCallback(async () => {
    const { status, data } = await GameService.index();
    setGames(data);
    console.log('status', status);
    console.log('data', data);
  }, []);

  return (
    <Container>
      <TopHeader tittle={'Meus Jogos'} />
      <Content></Content>
      {/* <MenuFooter /> */}
    </Container>
  );
}
