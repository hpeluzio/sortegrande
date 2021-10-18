import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import GameService from '~/services/GameService';

import '~/config/reactotron';

import {
  Row,
  NotCheckedSquare,
  CheckedSquare,
  WonText,
  Loader,
} from './styles';

export default function MyGames({ game, games, setGames }) {
  const [loadingCheck, setLoadingCheck] = useState(false);

  // useEffect(() => {
  //   console.log('games', games);
  // }, [games]);

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

  const checkGame = useCallback(
    async id => {
      setLoadingCheck(true);
      const { status } = await GameService.check({ id });

      if (status === 200) {
        const gamesUpdated = games.map(gameItem => {
          if (gameItem.id === id) {
            gameItem.status = 'checked';
          }
          return gameItem;
        });
        setGames(gamesUpdated);
        setLoadingCheck(false);
      }
    },
    [games, setGames],
  );

  return (
    <Row>
      {game.status === 'notchecked' && game.raffle.numbers === null && (
        <Row>
          <NotCheckedSquare toCheck={false}>
            <WonText>
              Será realizado no dia {moment(game.raffle.end).format('DD/MM')}
            </WonText>
          </NotCheckedSquare>
        </Row>
      )}
      {game.status === 'notchecked' && game.raffle.numbers !== null && (
        <Row>
          <NotCheckedSquare toCheck={true} onPress={() => checkGame(game.id)}>
            {!loadingCheck && <WonText>Conferir este jogo</WonText>}
            {loadingCheck && <Loader />}
          </NotCheckedSquare>
        </Row>
      )}
      {countGameHits(game) < 6 && game.status === 'checked' && (
        <Row>
          <CheckedSquare won={false}>
            <WonText>{countGameHits(game)} acertos</WonText>
          </CheckedSquare>
        </Row>
      )}
      {countGameHits(game) === 6 && game.status === 'checked' && (
        <Row>
          <CheckedSquare won={true}>
            <WonText>Jogo sorteado!</WonText>
          </CheckedSquare>
        </Row>
      )}
    </Row>
  );
}
