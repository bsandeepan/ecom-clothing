import { userActionTypes as userAT } from './user.types';

// Check User Session Action
export const checkUserSession =() => ({
    type: userAT.CHECK_USER_SESSION
});

// Sign In Start Actions (Google, Email)
export const googleSignInStart = () => ({
    type: userAT.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = (credentials) => ({
    type: userAT.EMAIL_SIGN_IN_START,
    payload: credentials
});

// Sign In End Actions
export const signInSuccess = (user) => ({
    type: userAT.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = (errorMessage) => ({
    type: userAT.SIGN_IN_FAILURE,
    payload: errorMessage
});

// Sign Out Actions
export const signOutStart = () => ({
    type: userAT.SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: userAT.SIGN_OUT_SUCCESS
});
export const signOutFailure = (errorMessage) => ({
    type: userAT.SIGN_OUT_FAILURE,
    payload: errorMessage
});

// Sign Up Actions
export const signUpStart = (credentials) => ({
    type: userAT.SIGN_UP_START,
    payload: credentials
});

export const signUpSuccess = () => ({
    type: userAT.SIGN_UP_SUCCESS
});
export const signUpFailure = (errorMessage) => ({
    type: userAT.SIGN_UP_FAILURE,
    payload: errorMessage
});