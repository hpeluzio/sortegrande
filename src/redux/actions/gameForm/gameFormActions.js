import { SET_GAME_FORM } from './gameFormActionTypes';

export const setGameForm = ({ selectedNumbers }) => ({
  type: SET_GAME_FORM,
  payload: { selectedNumbers },
});
