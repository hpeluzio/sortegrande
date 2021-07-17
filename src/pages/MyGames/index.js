import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import {
  setGameForm,
  setGameNameForm,
} from '~/redux/actions/gameForm/gameFormActions';

import GameService from '~/services/GameService';

import TopHeader from '~/components/TopHeader';

import {
  ScrollView,
  Container,
  Content,
  GameCard,
  EmptyGameCard,
  EmptyGameText,
  Top,
  Down,
  Left,
  Right,
  Numbers,
  NumberSquare,
  NumbersText,
  NameSquareLeft,
  NameSquareRight,
  DateSquareLeft,
  NameText,
  RepeatIcon,
  DeleteIcon,
  RefreshControl,
  Button,
} from './styles';

import { Alert } from 'react-native';

export default function MyGames({ navigation }) {
  const [games, setGames] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const selectedNumbers = useSelector(s => s.gameForm.selectedNumbers);
  const name = useSelector(s => s.gameForm.name);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('games: ', games);
  }, [games]);

  useEffect(() => {
    getMyGames();
    // console.log('navigation', navigation);
  }, [getMyGames]);

  const getMyGames = useCallback(async () => {
    const { status, data } = await GameService.getAllMyGames();
    if (status === 200) {
      setGames(data);
    }
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getMyGames();
    setRefreshing(false);
  }, [getMyGames]);

  const onDeleteGame = useCallback(
    async game_id => {
      setLoading(true);
      const { status, data } = await GameService.delete(game_id);
      // console.log('status', status, data);

      await getMyGames();

      setLoading(false);
    },
    [getMyGames],
  );

  const onEditGame = useCallback(
    async game => {
      // console.log('onEditGame: ', game);
      // console.log('numbersss: ', game.numbers);
      const arrayNumbersString = game.numbers.split(',');
      const arrayNumbersInteger = arrayNumbersString.map(n => parseInt(n));
      // console.log('arrayNumbersInteger: ', arrayNumbersInteger);

      dispatch(
        setGameForm({
          selectedNumbers: arrayNumbersInteger,
        }),
      );
      dispatch(setGameNameForm({ name: game.name }));
      navigation.navigate('GameForm');
    },
    [dispatch, navigation],
  );

  const onDeleteAlert = useCallback(
    game_id => {
      Alert.alert('Excluir jogo', 'Deseja realmente excluir o jogo?', [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'excluir',
          onPress: () => {
            onDeleteGame(game_id);
          },
        },
      ]);
    },
    [onDeleteGame],
  );

  const onEditAlert = useCallback(
    game => {
      Alert.alert(
        `Repetir este jogo: ${game.name}?`,
        `Deseja fazer outro jogo igual a este: ${game.name}?`,
        [
          {
            text: 'Cancelar',
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: 'REPETIR',
            onPress: () => {
              onEditGame(game);
            },
          },
        ],
      );
    },
    [onEditGame],
  );

  return (
    <Container>
      <TopHeader tittle={'Meus Jogos'} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {games.length === 0 ? (
          <Content>
            <EmptyGameCard>
              <EmptyGameText>
                Você ainda não possui nenhum jogo cadastrado.{' '}
              </EmptyGameText>
            </EmptyGameCard>
          </Content>
        ) : (
          <Content>
            {games.map(game => {
              return (
                <GameCard key={game.id}>
                  <Top>
                    <NameSquareLeft>
                      <NameText>Sorteio: </NameText>
                    </NameSquareLeft>
                    <NameSquareRight>
                      <NameText>{game.raffle.name} - </NameText>
                      <NameText>
                        {moment(game.end).format('DD/MM/YYYY')}
                      </NameText>
                    </NameSquareRight>
                  </Top>
                  <Top>
                    <NameSquareLeft>
                      <NameText>Nome: </NameText>
                    </NameSquareLeft>
                    <NameSquareRight>
                      <NameText>{game.name}</NameText>
                    </NameSquareRight>
                  </Top>
                  <Top>
                    <NameSquareLeft>
                      <NameText>Jogado: </NameText>
                    </NameSquareLeft>
                    <NameSquareRight>
                      <NameText>
                        {moment(game.date).format('DD/MM/YYYY HH:mm')}
                      </NameText>
                    </NameSquareRight>
                  </Top>

                  <Down>
                    <Left>
                      {/* <Button onPress={() => onDeleteAlert(game.id)}>
                      <DeleteIcon />
                    </Button> */}
                      <Button onPress={() => onEditAlert(game)}>
                        <RepeatIcon />
                      </Button>
                    </Left>
                    <Right>
                      <Numbers>
                        {game.numbers.split(',').map((number, index) => {
                          return (
                            <NumberSquare key={index}>
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
        )}
      </ScrollView>
      {/* <MenuFooter /> */}
    </Container>
  );
}
