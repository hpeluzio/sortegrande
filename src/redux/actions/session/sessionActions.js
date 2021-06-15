import { SET_SESSION } from './sessionActionTypes';

export const setSession = ({ user, token }) => ({
  type: SET_SESSION,
  payload: { user, token },
});
