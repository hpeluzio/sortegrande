import React, { useCallback, useState } from 'react';
import SessionService from '~/services/SessionService';

import TopHeader from '~/components/TopHeader';
import { validateEmail } from '~/utils/validateEmail';

import {
  ScrollView,
  InputContainer,
  AccountContainer,
  InputLabel,
  Email,
  Gradient,
  Loader,
  ButtonSubmit,
  ButtonText,
  LoginIcon,
  TokenIcon,
  Spacer,
  SimpleButton,
} from './styles';

import { Alert } from 'react-native';

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);

  //Form validation fields
  const [errorEmail, setErrorEmail] = useState(null);

  const validateFieldEmail = useCallback(async () => {
    if (validateEmail(email)) {
      setErrorEmail('');
      return validateEmail(email);
    } else {
      setErrorEmail('Preencha seu e-mail corretamente.');
      return validateEmail(email);
    }
  }, [email]);

  const sendForgotPasswordEmail = useCallback(async () => {
    if (validateEmail(email)) {
      setLoading(true);
      console.log('register: ', email);
      const response = await SessionService.forgotPassword({
        email,
      });

      // console.log('response: ', response);
      console.log('response.data: ', response.data);

      if (response.status === 200) {
        Alert.alert(
          'E-mail enviado',
          'Um e-mail foi enviado para sua conta de e-mail',
          [
            {
              text: 'OK',
              onPress: () => {
                navigation.navigate('ResetPassword');
              },
            },
          ],
        );
      } else {
        Alert.alert('Ocorreu algum erro', '', [
          {
            text: 'OK',
            onPress: () => {
              console.log('Error: ', response.data);
            },
          },
        ]);
      }

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [email, navigation]);

  return (
    <ScrollView>
      <TopHeader tittle={'Forgot'} />
      <InputContainer>
        <Email
          label="E-mail"
          placeholder="E-mail"
          onChangeText={setEmail}
          value={email}
          errorMessage={errorEmail}
          onBlur={validateFieldEmail}
        />

        <ButtonSubmit onPress={sendForgotPasswordEmail}>
          <Gradient>
            {!loading && <ButtonText>Enviar</ButtonText>}
            {loading && <Loader />}
          </Gradient>
        </ButtonSubmit>
        <Spacer />
        <AccountContainer>
          <SimpleButton onPress={() => navigation.navigate('Login')}>
            <LoginIcon />
            <InputLabel>Ir para login</InputLabel>
          </SimpleButton>
        </AccountContainer>
        <AccountContainer>
          <SimpleButton onPress={() => navigation.navigate('ResetPassword')}>
            <TokenIcon />
            <InputLabel>Já recebi o token</InputLabel>
          </SimpleButton>
        </AccountContainer>
      </InputContainer>
    </ScrollView>
  );
}
