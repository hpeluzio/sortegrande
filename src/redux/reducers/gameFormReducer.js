import { SET_GAME_FORM } from '../actions/gameForm/gameFormActionTypes';
import { SET_GAME_NAME_FORM } from '../actions/gameForm/gameFormActionTypes';
import { SET_CLEAR_FORM } from '../actions/gameForm/gameFormActionTypes';

const initialState = {
  selectedNumbers: [],
  name: '',
};

export const gameFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAME_FORM:
      return {
        ...state,
        selectedNumbers: action.payload.selectedNumbers,
      };
    case SET_GAME_NAME_FORM:
      return { ...state, name: action.payload.name };
    case SET_CLEAR_FORM:
      return {
        selectedNumbers: [],
        name: '',
      };
    default:
      return state;
  }
};
