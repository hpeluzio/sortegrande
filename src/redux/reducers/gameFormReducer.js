import { SET_GAME_FORM } from '../actions/gameForm/gameFormActionTypes';

const initialState = {
  selectedNumbers: [],
};

export const gameFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAME_FORM:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
