import { userActionTypes as uAT } from './user.types';

export const setCurrentUser = (user) => ({
    type: uAT.SET_CURRENT_USER,
    payload: user,
});