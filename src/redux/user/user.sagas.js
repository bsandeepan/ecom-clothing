import { takeLatest, call, put, all } from "redux-saga/effects";

import { 
    auth, 
    googleProvider,
    getCurrentUser, 
    createUserProfileDoc 
} from "../../firebase/firebase.utils";

import { userActionTypes as userAT } from './user.types';

import { 
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure,
} from "./user.actions";

// Firebase Snapshot Fetch Saga
export function* getSnapshotFromUserAuth (userAuth, additionalData={}) {
    try {
        // fetch userRef object and create if not exist
        const userRef = yield call(createUserProfileDoc, userAuth, additionalData);
        
        // if displayname is provided, it's a sign up call => signal success
        if (additionalData.displayName) yield put(signUpSuccess());

        // get user snapshot and sign in the user
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }));
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

// Google Sign In sagas
export function* signInWithGoogle () {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

export function* onGoogleSignInStart () {
    yield takeLatest(
        userAT.GOOGLE_SIGN_IN_START,
        signInWithGoogle
    );
};

// Email Sign In Sagas
export function* signInWithEmail ({payload: { email, password } }) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

export function* onEmailSignInStart () {
    yield takeLatest(
        userAT.EMAIL_SIGN_IN_START,
        signInWithEmail
    );
};

// Check User Session Sagas
export function* isUserAuthenticated () {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

export function* onCheckUserSession () {
    yield takeLatest(
        userAT.CHECK_USER_SESSION,
        isUserAuthenticated
    );
}

// Sign Out Sagas
export function* signOut () {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error.message));
    }
}

export function* onSignOutStart () {
    yield takeLatest(
        userAT.SIGN_OUT_START,
        signOut
    );
}

// Sign Up Sagas
export function* signUp ({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user, { displayName });
    } catch (error) {
        yield put(signUpFailure(error.message));
    }
}

export function* onSignUpStart () {
    yield takeLatest(
        userAT.SIGN_UP_START,
        signUp
    );
}

// unify all sagas here
export function* userSagas () {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
    ]);
}