import { SET_SESSION } from './sessionActionTypes';
import { SET_USER } from './sessionActionTypes';

export const setSession = ({ user, token }) => ({
  type: SET_SESSION,
  payload: { user, token },
});

export const setUser = ({ user }) => ({
  type: SET_USER,
  payload: { user },
});
