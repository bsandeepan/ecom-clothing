import { userActionTypes as uAT } from './user.types';

const INITIAL_STATE = {
    currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case uAT.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        case '':
            return {};
        default:
            return state;
    }
};