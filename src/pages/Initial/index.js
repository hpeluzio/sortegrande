import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Container, Welcome } from './styles';

import TrevoSVG from '~/components/TrevoSVG';

export default function Initial({ navigation }) {
  const token = useSelector(s => s.session.token);

  useEffect(() => {
    // console.log('token:: ', token);
    // console.log('navigation', navigation);
    // if (token !== null) {
    //   navigation.navigate('Home');
    // } else {
    //   navigation.navigate('Login');
    // }
  }, [navigation, token]);

  return (
    <Container>
      <TrevoSVG />
      {/* <Welcome>Sorte Grande</Welcome> */}
      {/* <Button
        title="Go Login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <Button
        title="Go Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      /> */}
    </Container>
  );
}
