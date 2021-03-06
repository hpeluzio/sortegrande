import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Initial from '~/pages/Initial';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import ForgotPassword from '~/pages/ForgotPassword';
import ResetPassword from '~/pages/ResetPassword';
import Home from '~/pages/Home';
import Account from '~/pages/Account';
import MyGames from '~/pages/MyGames';
import GameForm from '~/pages/GameForm';
import PaymentForm from '~/pages/PaymentForm';
import PaymentProcessing from '~/pages/PaymentProcessing';
import PaymentConfirmation from '~/pages/PaymentConfirmation';

export default () => {
  return createAppContainer(
    createStackNavigator({
      Initial: {
        screen: Initial,
        path: '',
        navigationOptions: { headerShown: false },
      },
      Login: { screen: Login, navigationOptions: { headerShown: false } },
      Register: { screen: Register, navigationOptions: { headerShown: false } },
      ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: { headerShown: false },
      },
      ResetPassword: {
        screen: ResetPassword,
        path: 'resetpassword/:token',
        navigationOptions: { headerShown: false },
      },
      Home: { screen: Home, navigationOptions: { headerShown: false } },
      Account: { screen: Account, navigationOptions: { headerShown: false } },
      MyGames: { screen: MyGames, navigationOptions: { headerShown: false } },
      GameForm: { screen: GameForm, navigationOptions: { headerShown: false } },
      PaymentForm: {
        screen: PaymentForm,
        navigationOptions: { headerShown: false },
      },
      PaymentProcessing: {
        screen: PaymentProcessing,
        navigationOptions: { headerShown: false },
      },
      PaymentConfirmation: {
        screen: PaymentConfirmation,
        navigationOptions: { headerShown: false },
      },
    }),
  );
};
