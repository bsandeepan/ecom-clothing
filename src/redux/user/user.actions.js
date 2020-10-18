import { userActionTypes as userAT } from './user.types';

export const setCurrentUser = (user) => ({
    type: userAT.SET_CURRENT_USER,
    payload: user,
});