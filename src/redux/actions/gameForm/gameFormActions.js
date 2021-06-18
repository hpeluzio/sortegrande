import { SET_GAME_FORM } from './gameFormActionTypes';
import { SET_GAME_NAME_FORM } from './gameFormActionTypes';

export const setGameForm = selectedNumbers => ({
  type: SET_GAME_FORM,
  payload: selectedNumbers,
});

export const setGameNameForm = ({ name }) => ({
  type: SET_GAME_NAME_FORM,
  payload: { name },
});
