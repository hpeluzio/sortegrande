import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import TopHeader from '~/components/TopHeader';
import CloverBackground from '~/components/CloverBackground';
import messaging from '@react-native-firebase/messaging';

import RaffleService from '~/services/RaffleService';

import {
  Container,
  ScrollView,
  RefreshControl,
  Loader,
  Content,
  TotalPrizeRow,
  ItemPrize,
  Row,
  Item,
  TextAcumulated,
  ValueAcumulated,
  ItemName,
  List,
  // BookIcon,
  // CreditCardIcon,
  CloverIcon,
  PencilSignIcon,
} from './styles';

export default function Home({ navigation }) {
  const role = useSelector(s => s.session.user.role);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   showFcmToken();
  // }, [showFcmToken]);

  useEffect(() => {
    getTotalPrize();
  }, [showFcmToken, getTotalPrize]);

  const showFcmToken = useCallback(async () => {
    const fcmToken = await messaging().getToken();
    console.log('fcmToken: ', fcmToken);
  }, []);

  const getTotalPrize = useCallback(async () => {
    setLoading(true);
    const { status, data } = await RaffleService.getTotalPrizeOfLastRaffle();

    if (status === 200) {
      setTotal(data);
    }
    setLoading(false);
    console.log('data: ', data);
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getTotalPrize();
    setRefreshing(false);
  }, [getTotalPrize]);

  return (
    <Container>
      <TopHeader tittle={'Tela inicial'} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <TotalPrizeRow>
          <ItemPrize>
            {/* <BookIcon /> */}
            <TextAcumulated>Prêmio acumulado: </TextAcumulated>
            {loading && (
              <ValueAcumulated>
                <Loader />
              </ValueAcumulated>
            )}
            {!loading && (
              <ValueAcumulated>
                {total.toFixed(2).replace(/\./g, ',')} R${' '}
              </ValueAcumulated>
            )}
          </ItemPrize>
          {/* <Item onPress={() => navigation.navigate('PaymentForm')}>
            <CreditCardIcon />
            <ItemName>Cadastrar pagamento</ItemName>
          </Item> */}
        </TotalPrizeRow>
        <Content>
          <Row>
            {/* <Item onPress={() => {}}>
            <BookIcon />
            <ItemName>Jogos cadastrados</ItemName>
          </Item> */}
            {/* <Item onPress={() => navigation.navigate('PaymentForm')}>
            <CreditCardIcon />
            <ItemName>Cadastrar pagamento</ItemName>
          </Item> */}
          </Row>
          <Row>
            <Item onPress={() => navigation.navigate('MyGames')}>
              <List />
              <ItemName>Meus jogos</ItemName>
            </Item>
          </Row>
          {role === 'admin' && (
            <Row>
              <Item
                onPress={() =>
                  navigation.navigate('GameForm', { type: 'signature' })
                }>
                <PencilSignIcon />
                <ItemName>Fazer assinatura semanal de um jogo</ItemName>
              </Item>
            </Row>
          )}
          <Row>
            <Item
              onPress={() =>
                navigation.navigate('GameForm', { type: 'single' })
              }>
              <CloverIcon />
              <ItemName>Fazer um jogo único</ItemName>
            </Item>
          </Row>
        </Content>
        {/* <MenuFooter /> */}
        {/* <CloverBackground /> */}
      </ScrollView>
      <CloverBackground />
    </Container>
  );
}
