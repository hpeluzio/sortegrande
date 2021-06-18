import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Initial from '~/pages/Initial';
import Login from '~/pages/Login';
import Home from '~/pages/Home';
import Account from '~/pages/Account';
import MyGames from '~/pages/MyGames';
import GameForm from '~/pages/GameForm';

export default () => {
  return createAppContainer(
    createStackNavigator({
      Initial: { screen: Initial, navigationOptions: { headerShown: false } },
      Login: { screen: Login, navigationOptions: { headerShown: false } },
      Home: { screen: Home, navigationOptions: { headerShown: false } },
      Account: { screen: Account, navigationOptions: { headerShown: false } },
      MyGames: { screen: MyGames, navigationOptions: { headerShown: false } },
      GameForm: { screen: GameForm, navigationOptions: { headerShown: false } },
    }),
  );
};
