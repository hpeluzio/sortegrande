import { SET_GAME_FORM_TYPE } from './gameFormActionTypes';
import { SET_GAME_FORM_NUMBERS } from './gameFormActionTypes';
import { SET_GAME_FORM_NAME } from './gameFormActionTypes';
import { SET_CLEAR_FORM } from './gameFormActionTypes';

export const setGameFormType = gameFormType => ({
  type: SET_GAME_FORM_TYPE,
  payload: gameFormType,
});

export const setGameFormNumbers = selectedNumbers => ({
  type: SET_GAME_FORM_NUMBERS,
  payload: selectedNumbers,
});

export const setGameNameForm = ({ name }) => ({
  type: SET_GAME_FORM_NAME,
  payload: { name },
});

export const setGameClearForm = () => ({
  type: SET_CLEAR_FORM,
});
