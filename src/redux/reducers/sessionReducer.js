import { SET_SESSION } from '../actions/session/sessionActionTypes';
import { SET_USER } from '../actions/session/sessionActionTypes';

const initialState = {
  user: {},
  token: null,
};

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SESSION:
      return Object.assign({}, state, action.payload);
    case SET_USER:
      // return Object.assign({}, state, action.payload);
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
};
