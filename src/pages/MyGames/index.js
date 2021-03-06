import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import {
  setGameFormNumbers,
  setGameNameForm,
} from '~/redux/actions/gameForm/gameFormActions';

import GameService from '~/services/GameService';

import TopHeader from '~/components/TopHeader';
import CheckButton from './components/CheckButton';

import '~/config/reactotron';

import {
  ScrollView,
  Container,
  Content,
  GameCard,
  EmptyGameCard,
  EmptyGameText,
  Row,
  Down,
  Left,
  Right,
  Numbers,
  NumberSquare,
  NumbersText,
  NameSquareLeft,
  NameSquareRight,
  // WonSquare,
  NotCheckedSquare,
  CheckedSquare,
  NameText,
  WonText,
  RepeatIcon,
  // DeleteIcon,
  RefreshControl,
  Button,
  LoadingGif,
  Loader,
  EmptyAnimation,
} from './styles';

import { Alert } from 'react-native';

export default function MyGames({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [loadingCheck, setLoadingCheck] = useState(false);
  const [games, setGames] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  // const selectedNumbers = useSelector(s => s.gameForm.selectedNumbers);
  // const name = useSelector(s => s.gameForm.name);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('games', games);
  // }, [games]);

  useEffect(() => {
    getMyGames();
  }, [getMyGames]);

  const countGameHits = useCallback(game => {
    if (game.raffle.numbers === null) {
      return 0;
    }

    const luckNumbers = game.raffle.numbers.split(',');
    const gameNumbers = game.numbers.split(',');

    let hits = 0;
    for (let i = 0; i < luckNumbers.length; i++) {
      if (gameNumbers.indexOf(luckNumbers[i]) !== -1) {
        hits += 1;
      }
    }

    return hits;
  }, []);

  const getMyGames = useCallback(async () => {
    setLoading(true);

    const { status, data } = await GameService.getAllMyGames();

    if (status === 200) {
      setGames(data);
    }
    setLoading(false);
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getMyGames();
    setRefreshing(false);
  }, [getMyGames]);

  // const onDeleteGame = useCallback(
  //   async game_id => {
  //     setLoading(true);
  //     const { status, data } = await GameService.delete(game_id);
  //     // console.log('status', status, data);

  //     await getMyGames();

  //     setLoading(false);
  //   },
  //   [getMyGames],
  // );

  const onEditGame = useCallback(
    async game => {
      // console.log('onEditGame: ', game);
      // console.log('numbersss: ', game.numbers);
      const arrayNumbersString = game.numbers.split(',');
      const arrayNumbersInteger = arrayNumbersString.map(n => parseInt(n));
      // console.log('arrayNumbersInteger: ', arrayNumbersInteger);

      dispatch(
        setGameFormNumbers({
          selectedNumbers: arrayNumbersInteger,
        }),
      );
      dispatch(setGameNameForm({ name: game.name }));
      navigation.navigate('GameForm', { type: 'single' });
    },
    [dispatch, navigation],
  );

  // const onDeleteAlert = useCallback(
  //   game_id => {
  //     Alert.alert('Excluir jogo', 'Deseja realmente excluir o jogo?', [
  //       {
  //         text: 'Cancelar',
  //         onPress: () => {},
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'excluir',
  //         onPress: () => {
  //           onDeleteGame(game_id);
  //         },
  //       },
  //     ]);
  //   },
  //   [onDeleteGame],
  // );

  const paymentStatus = useCallback(status => {
    if (status === 'approved') {
      return 'Aprovado';
    }
    if (status === 'authorized') {
      return 'Autorizado';
    }
    if (status === 'in_process') {
      return 'Processando pagamento';
    }
    if (status === 'pending') {
      return 'Pendente';
    }
    if (status === 'rejected') {
      return 'Pagamento rejeitado';
    }
  }, []);

  const onEditAlert = useCallback(
    game => {
      Alert.alert(
        `Repetir este jogo: ${game.name}?`,
        `Deseja fazer um jogo ??nico jogo igual a este: ${game.name}?`,
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

  const isThisNumberInRaffle = useCallback((number, raffleNumbers, status) => {
    if (status === 'notchecked') {
      return false;
    }

    if (raffleNumbers !== null) {
      raffleNumbers = raffleNumbers.split(',');
      return raffleNumbers.includes(number);
    }
  }, []);

  // const checkGame = useCallback(
  //   async id => {
  //     setLoadingCheck(true);
  //     // console.tron.log(id);
  //     const { status, data } = await GameService.check({ id });

  //     if (status === 200) {
  //       const gamesUpdated = games.map(game => {
  //         if (game.id === id) {
  //           game.status = 'checked';
  //         }
  //         return game;
  //       });
  //       setGames(gamesUpdated);
  //       setLoadingCheck(false);
  //     }
  //   },
  //   [games],
  // );

  const paymentType = useCallback(type => {
    if (type === 'single') {
      return '??nico';
    }
    if (type === 'signature') {
      return 'Assinatura';
    }
  }, []);

  if (loading) {
    return (
      <Container>
        <TopHeader tittle={'Meus Jogos'} />
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <Content>
            <LoadingGif />
          </Content>
        </ScrollView>
        {/* <MenuFooter /> */}
      </Container>
    );
  }

  if (!loading) {
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
                <EmptyAnimation />
                <EmptyGameText>
                  Voc?? ainda n??o possui nenhum jogo cadastrado.{' '}
                </EmptyGameText>
              </EmptyGameCard>
            </Content>
          ) : (
            <Content>
              {games.map(game => {
                return (
                  <GameCard key={game.id}>
                    <CheckButton
                      game={game}
                      games={games}
                      setGames={setGames}
                    />
                    <Row>
                      <NameSquareLeft>
                        <NameText>Sorteio: </NameText>
                      </NameSquareLeft>
                      <NameSquareRight>
                        <NameText>n?? {game.raffle.name} - </NameText>
                        <NameText>
                          {moment(game.raffle.end).format('DD/MM')}
                        </NameText>
                      </NameSquareRight>
                    </Row>
                    <Row>
                      <NameSquareLeft>
                        <NameText>Nome: </NameText>
                      </NameSquareLeft>
                      <NameSquareRight>
                        <NameText>{game.name}</NameText>
                      </NameSquareRight>
                    </Row>
                    <Row>
                      <NameSquareLeft>
                        <NameText>Jogado: </NameText>
                      </NameSquareLeft>
                      <NameSquareRight>
                        <NameText>
                          {moment(game.date).format('DD/MM HH:mm')}
                        </NameText>
                      </NameSquareRight>
                    </Row>
                    <Row>
                      <NameSquareLeft>
                        <NameText>Status: </NameText>
                      </NameSquareLeft>
                      <NameSquareRight>
                        <NameText>
                          {paymentStatus(game.payment.status)}
                        </NameText>
                      </NameSquareRight>
                    </Row>
                    <Row>
                      <NameSquareLeft>
                        <NameText>Tipo: </NameText>
                      </NameSquareLeft>
                      <NameSquareRight>
                        <NameText>{paymentType(game.payment.type)}</NameText>
                      </NameSquareRight>
                    </Row>

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
                              <NumberSquare
                                key={index}
                                color={isThisNumberInRaffle(
                                  number,
                                  game.raffle.numbers,
                                  game.status,
                                )}>
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
}
