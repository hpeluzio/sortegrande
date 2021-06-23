import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SessionService from '~/services/SessionService';

import TopHeader from '~/components/TopHeader';
import ModalAlert from '~/components/ModalAlert';
import { validateEmail } from '~/utils/validateEmail';

import {
  ScrollView,
  InputContainer,
  AccountContainer,
  Back,
  InputLabel,
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

  const [showModal, setShowModal] = useState(false);
  const [tittle, setTittle] = useState('');
  const [message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState('');

  //Form validation
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(null);

  const validateFieldEmail = useCallback(() => {
    validateEmail(email)
      ? setErrorEmail(null)
      : setErrorEmail('Preencha seu e-mail corretamente.');
    return validateEmail(email);
  }, [email]);

  const validateFieldPassword = useCallback(() => {
    password.length >= 6
      ? setErrorPassword(null)
      : setErrorPassword('Forneça uma senha com 6 dígitos ou maior.');
    return password.length >= 6;
  }, [password]);

  const validateFieldConfirmPassword = useCallback(() => {
    confirmPassword === password
      ? setErrorConfirmPassword(null)
      : setErrorConfirmPassword('As senhas não conferem.');
    return confirmPassword === password;
  }, [password, confirmPassword]);

  const register = useCallback(async () => {
    if (validateForm()) {
      setLoading(true);
      console.log('register: ', email, password);
      const response = await SessionService.register({
        email,
        password,
        confirm_password: confirmPassword,
      });

      console.log('response: ', response);
      // console.log('response: ', response.data);

      if (response.status === 200) {
        setTittle('Conta criada');
        setMessage(response.data.message);
        setButtonText('Ok');
        setShowModal(true);
      } else if (response.status !== 200) {
        setTittle('Erro ao criar conta');
        setMessage(response.data.error[0].message);
        setButtonText('Ok');
        setShowModal(true);
      }

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [validateForm, email, password, confirmPassword]);

  const validateForm = useCallback(() => {
    if (
      validateFieldEmail() &&
      validateFieldPassword() &&
      validateFieldConfirmPassword()
    ) {
      return true;
      // console.log(false);
    } else {
      return false;
    }
  }, [validateFieldEmail, validateFieldPassword, validateFieldConfirmPassword]);

  return (
    <ScrollView>
      <ModalAlert />
      <TopHeader tittle={'Criar Conta'} />
      <InputContainer>
        <ModalAlert
          show={showModal}
          tittle={tittle}
          message={message}
          buttonText={buttonText}
          close={setShowModal}
          action={() => {}}
        />

        <Email
          label="E-mail"
          placeholder="E-mail"
          onChangeText={setEmail}
          value={email}
          errorMessage={errorEmail}
          onBlur={validateFieldEmail}
        />

        <Password
          label="Senha"
          placeholder="Senha"
          onChangeText={setPassword}
          value={password}
          errorMessage={errorPassword}
          onBlur={validateFieldPassword}
        />
        <Password
          label="Confirmar senha"
          placeholder="Confirmar senha"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          errorMessage={errorConfirmPassword}
          onBlur={validateFieldConfirmPassword}
        />
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
