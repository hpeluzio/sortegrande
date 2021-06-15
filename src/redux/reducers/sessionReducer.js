import { SET_SESSION } from '../actions/session/sessionActionTypes';

const initialState = {
  user: {},
  token: null,
};

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SESSION:
      return Object.assign({}, state, action.payload);
    case 'UPDATE_SESSION_USER':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
