import { combineReducers } from 'redux';

import { sessionReducer } from './sessionReducer';
import { gameFormReducer } from './gameFormReducer';

export const Reducers = combineReducers({
  session: sessionReducer,
  gameForm: gameFormReducer,
});
