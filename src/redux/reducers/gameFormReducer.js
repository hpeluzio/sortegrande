import { SET_GAME_FORM } from '../actions/gameForm/gameFormActionTypes';
import { SET_GAME_NAME_FORM } from '../actions/gameForm/gameFormActionTypes';

const initialState = {
  selectedNumbers: [],
  name: '',
};

export const gameFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAME_FORM:
      console.log('action: ', action);
      // return Object.assign({}, state, action.payload);
      return {
        ...state,
        selectedNumbers: action.payload.selectedNumbers,
      };
    case SET_GAME_NAME_FORM:
      console.log('action: ', action);
      return { ...state, name: action.payload.name };
    default:
      return state;
  }
};
