import { SET_GAME_FORM_TYPE } from '../actions/gameForm/gameFormActionTypes';
import { SET_GAME_FORM_NUMBERS } from '../actions/gameForm/gameFormActionTypes';
import { SET_GAME_FORM_NAME } from '../actions/gameForm/gameFormActionTypes';
import { SET_CLEAR_FORM } from '../actions/gameForm/gameFormActionTypes';

const initialState = {
  gameFormType: '',
  selectedNumbers: [],
  name: '',
};

export const gameFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAME_FORM_TYPE:
      return { ...state, gameFormType: action.payload.gameFormType };
    case SET_GAME_FORM_NUMBERS:
      return {
        ...state,
        selectedNumbers: action.payload.selectedNumbers,
      };
    case SET_GAME_FORM_NAME:
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
