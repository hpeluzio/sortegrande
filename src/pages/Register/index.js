import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SessionService from '~/services/SessionService';

import { Alert } from 'react-native';

import {
  ScrollView,
  InputContainer,
  AccountContainer,
  Back,
  InputLabel,
  AccountLabel,
  Email,
  Password,
  Gradient,
  Loader,
  Button,
  ButtonText,
  LoginIcon,
  Spacer,
  SimpleButton,
} from './styles';

export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const session = useSelector(s => s.session);

  // useEffect(() => {
  //   console.log('session: ', session);
  //   // if (token !== null) {
  //   //   navigation.navigate('Home');
  //   // } else {
  //   //   navigation.navigate('Login');
  //   // }
  // }, [session]);

  const register = useCallback(async () => {
    setLoading(true);
    console.log('register: ', email, password);
    const { status, data } = await SessionService.register({
      email,
      password,
      confirm_password: confirmPassword,
    });
    console.log('response: ', data);
    if (status === 200) {
      registerAlert();
    }

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [email, password, confirmPassword, registerAlert]);

  const registerAlert = useCallback(
    () =>
      Alert.alert('CONTA CRIADA', 'Sua conta foi criada com sucesso', [
        // {
        //   text: 'Cancel',
        //   onPress: () => console.log('Cancel Pressed'),
        //   style: 'cancel',
        // },
        { text: 'Ir para login', onPress: () => navigation.navigate('Login') },
      ]),
    [navigation],
  );

  return (
    <ScrollView>
      <InputContainer>
        <Back />
        {/* <Logo /> */}
        <InputLabel>E-mail</InputLabel>
        <Email onChangeText={setEmail} value={email} />
        <InputLabel>Senha</InputLabel>
        <Password onChangeText={setPassword} value={password} />
        <InputLabel>Confirmar senha</InputLabel>
        <Password onChangeText={setConfirmPassword} value={confirmPassword} />
        <Button onPress={register}>
          <Gradient>
            {!loading && <ButtonText>Enviar</ButtonText>}
            {loading && <Loader />}
          </Gradient>
        </Button>
        <Spacer />
        <AccountContainer>
          <SimpleButton onPress={() => navigation.navigate('Login')}>
            <LoginIcon />
            <InputLabel>Ir para login</InputLabel>
          </SimpleButton>
        </AccountContainer>
      </InputContainer>
    </ScrollView>
  );
}
