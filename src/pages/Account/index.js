import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSession } from '~/redux/actions/session/sessionActions';
import { setUser } from '~/redux/actions/session/sessionActions';

import SessionService from '~/services/SessionService';
import UserService from '~/services/UserService';
import TopHeader from '~/components/TopHeader';

import { validateEmail } from '~/utils/validateEmail';

import {
  Email,
  Password,
  Gradient,
  Loader,
  ButtonText,
  InputContainer,
  Container,
  Content,
  Button,
  ButtonSubmit,
  Logout,
  Label,
  Spacer,
} from './styles';

import { Alert } from 'react-native';

export default function Account({ navigation }) {
  const token = useSelector(s => s.session.token);
  const dispatch = useDispatch();
  const user = useSelector(s => s.session.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  //Form validation fields
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(null);

  useEffect(() => {
    setEmail(user.email);
  }, [user.email]);

  useEffect(() => {
    console.log('user: ', user);

    if (token === null) {
      navigation.navigate('Login');
    }
  }, [navigation, token, user]);

  const validateFieldEmail = useCallback(async () => {
    if (validateEmail(email)) {
      setErrorEmail(null);

      const response = await SessionService.checkEmail({ email });
      if (response.data.available === false) {
        setErrorEmail('E-mail já cadastrado.');
        return false;
      }
    } else {
      setErrorEmail('Preencha seu e-mail corretamente.');
      return validateEmail(email);
    }
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

  const validateForm = useCallback(() => {
    if (
      validateFieldEmail() &&
      validateFieldPassword() &&
      validateFieldConfirmPassword()
    ) {
      return true;
    } else {
      return false;
    }
  }, [validateFieldEmail, validateFieldPassword, validateFieldConfirmPassword]);

  const update = useCallback(async () => {
    if (validateForm()) {
      setLoading(true);
      console.log('update: ', email, password);
      const response = await UserService.update({
        email,
        password,
        confirm_password: confirmPassword,
      });

      // console.log('response: ', response);
      console.log('response: ', response);

      if (response.status === 200) {
        user.email = email;
        dispatch(setUser({ user: user }));
        Alert.alert('Perfil atualizado', 'Atualização feita com sucesso.', [
          {
            text: 'Ok',
            onPress: () => {},
          },
        ]);
      } else if (response.status !== 200) {
        Alert.alert('Ocorreu algum erro', '', [
          {
            text: 'Ok',
            onPress: () => {},
          },
        ]);
      }

      setLoading(false);
    }
  }, [validateForm, dispatch, email, password, confirmPassword, user]);

  const logout = useCallback(() => {
    dispatch(setSession({ user: {}, token: null }));
  }, [dispatch]);

  return (
    <Container>
      <TopHeader tittle={'Perfil'} />
      <Content>
        <InputContainer>
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
          <ButtonSubmit onPress={update}>
            <Gradient>
              {!loading && <ButtonText>Enviar</ButtonText>}
              {loading && <Loader />}
            </Gradient>
          </ButtonSubmit>
          <Spacer />
          <Button onPress={logout}>
            <Logout />
            <Label>Logout</Label>
          </Button>
        </InputContainer>
      </Content>
    </Container>
  );
}
