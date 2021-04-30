import { userActionTypes as userAT } from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    errorMessage: undefined
};

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userAT.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                errorMessage: undefined
            };
        case userAT.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                errorMessage: undefined
            }
        case userAT.SIGN_IN_FAILURE:
        case userAT.SIGN_UP_FAILURE:
        case userAT.SIGN_OUT_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};