import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

import TrevoSVG from '~/components/TrevoSVG';

export default function Initial({ navigation }) {
  const token = useSelector(s => s.session.token);

  useEffect(() => {
    if (token !== null) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('Login');
    }
  }, [navigation, token]);

  return (
    <Container>
      <TrevoSVG />
    </Container>
  );
}
