import { takeLatest, call, put, all } from "redux-saga/effects";

import { userActionTypes as userAT } from '../user/user.types';
// import {cartActionTypes as cartAT} from "./cart.types";

import { clearCart } from "./cart.actions";

// clear cart when user signs out sagas
export function* clearCartOnSignOut () {
    yield put(clearCart());
}

export function* onSignOutSuccess () {
    yield takeLatest(
        userAT.SIGN_OUT_SUCCESS,
        clearCartOnSignOut
    );
}

// unify all sagas here
export function* cartSagas () {
    yield all([
        call(onSignOutSuccess),
    ])
}