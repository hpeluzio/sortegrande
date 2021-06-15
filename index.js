/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from '~/';
import { name as appName } from './app.json';
import moment from 'moment';
import locale from 'moment/locale/pt-br';

moment.updateLocale('pt-br', locale);

AppRegistry.registerComponent(appName, () => App);
