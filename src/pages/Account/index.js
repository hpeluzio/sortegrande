import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSession } from '~/redux/actions/session/sessionActions';
import { setPaymentClearForm } from '~/redux/actions/paymentForm/paymentFormActions';
import { setGameClearForm } from '~/redux/actions/gameForm/gameFormActions';
import { setUser } from '~/redux/actions/session/sessionActions';

import SessionService from '~/services/SessionService';
import UserService from '~/services/UserService';
import TopHeader from '~/components/TopHeader';

import { validateEmail } from '~/utils/validateEmail';

import {
  CustomInputText,
  Gradient,
  Loader,
  ButtonText,
  InputContainer,
  InputRow,
  InputRowLogout,
  Container,
  Content,
  UserInfo,
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
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  useEffect(() => {
    setEmail(user.email);
  }, [user.email]);

  useEffect(() => {
    if (token === '') {
      navigation.navigate('Login');
    }
  }, [navigation, token, user]);

  const validateFieldEmail = useCallback(async () => {
    if (validateEmail(email)) {
      setErrorEmail('');

      if (email !== user.email) {
        console.log('E-mail diferente');
        const response = await SessionService.checkEmail({ email });
        if (response.data.status !== 200) {
          setErrorEmail('E-mail já cadastrado.');
          return false;
        }
      }
    } else {
      setErrorEmail('Preencha seu e-mail corretamente.');
      return validateEmail(email);
    }
  }, [email, user.email]);

  const validateFieldPassword = useCallback(() => {
    password.length >= 6
      ? setErrorPassword('')
      : setErrorPassword('Forneça uma senha com 6 dígitos ou maior.');
    return password.length >= 6;
  }, [password]);

  const validateFieldConfirmPassword = useCallback(() => {
    confirmPassword === password
      ? setErrorConfirmPassword('')
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
      Alert.alert('Continuar', 'Deseja atualizar seus dados?', [
        {
          text: 'Não',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: async () => {
            setLoading(true);
            console.log('Updating: ', email, password);
            const response = await UserService.update({
              email,
              password,
              confirm_password: confirmPassword,
            });

            // console.log('response: ', response);
            // console.log('response: ', response);

            if (response.status === 200) {
              user.email = email;
              dispatch(setUser({ user: user }));
              Alert.alert(
                'Perfil atualizado',
                'Atualização feita com sucesso.',
                [
                  {
                    text: 'Ok',
                    onPress: () => {},
                  },
                ],
              );
            } else if (response.status !== 200) {
              Alert.alert('Ocorreu algum erro', '', [
                {
                  text: 'Ok',
                  onPress: () => {},
                },
              ]);
            }

            setLoading(false);
          },
        },
      ]);
    }
  }, [validateForm, dispatch, email, password, confirmPassword, user]);

  const logout = useCallback(() => {
    Alert.alert('Deseja encerrar a sessão?', '', [
      {
        text: 'Não',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => {
          dispatch(setSession({ user: {}, token: null }));
          dispatch(setPaymentClearForm());
          dispatch(setGameClearForm());
        },
      },
    ]);
  }, [dispatch]);

  return (
    <Container>
      <TopHeader tittle={'Perfil'} />
      <Content>
        <UserInfo>Logado como: {email}</UserInfo>
        <InputContainer>
          {/* <InputRow>
            <CustomInputText
              label={'E-mail:'}
              placeholder={'E-mail'}
              value={email}
              errorMessage={errorEmail}
              onChangeText={text => setEmail(text)}
              onBlur={validateFieldEmail}
              type={'Entypo'}
              icon={'mail'}
            />
          </InputRow> */}
          <InputRow>
            <CustomInputText
              label={'Senha:'}
              placeholder={'Senha'}
              value={password}
              errorMessage={errorPassword}
              onChangeText={text => setPassword(text)}
              onBlur={validateFieldPassword}
              type={'FontAwesome'}
              icon={'lock'}
              secureTextEntry={true}
            />
          </InputRow>
          <InputRow>
            <CustomInputText
              label={'Confirmar senha:'}
              placeholder={'Confirmar senha'}
              value={confirmPassword}
              errorMessage={errorConfirmPassword}
              onChangeText={text => setConfirmPassword(text)}
              onBlur={validateFieldConfirmPassword}
              type={'FontAwesome'}
              icon={'lock'}
              secureTextEntry={true}
            />
          </InputRow>
          <Spacer />
          <ButtonSubmit onPress={update}>
            <Gradient>
              {!loading && <ButtonText>Confirmar</ButtonText>}
              {loading && <Loader />}
            </Gradient>
          </ButtonSubmit>
          <Spacer />
          <Spacer />
          <Spacer />
          <InputRowLogout>
            <Button onPress={logout}>
              <Logout />
              <Label>Encerrar sessão</Label>
            </Button>
          </InputRowLogout>
        </InputContainer>
      </Content>
    </Container>
  );
}
