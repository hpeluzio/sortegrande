import React, { useCallback, useEffect, useState } from 'react';

import GameService from '~/services/GameService';

import TopHeader from '~/components/TopHeader';
import MenuFooter from '~/components/MenuFooter';

import {
  ScrollView,
  Container,
  Content,
  GameCard,
  Left,
  Right,
  Numbers,
  NumbersText,
  Name,
  NameText,
  EditIcon,
  DeleteIcon,
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
      <ScrollView>
        <Content>
          {games.map(game => {
            return (
              <GameCard key={game.id}>
                <Left>
                  <Name>
                    <NameText>{game.name}</NameText>
                  </Name>
                  <Numbers>
                    <NumbersText>{game.numbers}</NumbersText>
                  </Numbers>
                </Left>
                <Right>
                  <EditIcon />
                  <DeleteIcon />
                </Right>
              </GameCard>
            );
          })}
        </Content>
      </ScrollView>
      {/* <MenuFooter /> */}
    </Container>
  );
}
