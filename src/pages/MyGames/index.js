import React, { useCallback, useEffect, useState } from 'react';

import GameService from '~/services/GameService';

import TopHeader from '~/components/TopHeader';

import {
  ScrollView,
  Container,
  Content,
  GameCard,
  Top,
  Down,
  Left,
  Right,
  Numbers,
  NumberSquare,
  NumbersText,
  Name,
  NameSquare,
  NameText,
  EditIcon,
  DeleteIcon,
  RefreshControl,
} from './styles';

export default function MyGames({ navigation }) {
  const [games, setGames] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

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

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getMyGames();
    setRefreshing(false);
  }, [getMyGames]);

  return (
    <Container>
      <TopHeader tittle={'Meus Jogos'} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Content>
          {games.map(game => {
            return (
              <GameCard key={game.id}>
                <Top>
                  <Name>
                    <NameSquare>
                      <NameText>{game.name}</NameText>
                    </NameSquare>
                    <NameSquare>
                      <NameText>{game.raffle_name}</NameText>
                    </NameSquare>
                  </Name>
                </Top>
                <Down>
                  <Left>
                    <DeleteIcon />
                    <EditIcon />
                  </Left>
                  <Right>
                    <Numbers>
                      {game.numbers.split(',').map(number => {
                        return (
                          <NumberSquare>
                            <NumbersText>{number}</NumbersText>
                          </NumberSquare>
                        );
                      })}
                    </Numbers>
                  </Right>
                </Down>
              </GameCard>
            );
          })}
        </Content>
      </ScrollView>
      {/* <MenuFooter /> */}
    </Container>
  );
}
