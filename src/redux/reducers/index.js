import { combineReducers } from 'redux';

import { sessionReducer } from './sessionReducer';
import { gameFormReducer } from './gameFormReducer';
import { paymentFormReducer } from './paymentFormReducer';

export const Reducers = combineReducers({
  session: sessionReducer,
  gameForm: gameFormReducer,
  paymentForm: paymentFormReducer,
});
