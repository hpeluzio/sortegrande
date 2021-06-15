import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Initial from '~/pages/Initial';
import Login from '~/pages/Login';
import Home from '~/pages/Home';

export default () => {
  return createAppContainer(
    createStackNavigator({
      Initial: { screen: Initial, navigationOptions: { headerShown: false } },
      Login: { screen: Login, navigationOptions: { headerShown: false } },
      Home: { screen: Home, navigationOptions: { headerShown: false } },
    }),
  );
};
