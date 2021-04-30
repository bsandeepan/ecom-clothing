import { takeLatest, call, put, all } from "redux-saga/effects";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import { shopActionTypes as shopAT } from "./shop.types";
import { 
    fetchCollectionsFailure, 
    fetchCollectionsSuccess 
} from "./shop.actions";

export function* fetchCollectionsAsync() {
    try {
        // fetch reference from firestore
        const collectionRef = firestore.collection('collections');
        // fetch snapshot from the reference
        const snapshot = yield collectionRef.get();
        // generate collectionMappedArray
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        // signal success and send the payload to redux
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        // signal failure and send the error message
        yield put(fetchCollectionsFailure(error.message));
    }
};

export function* fetchCollectionsStart() {
    yield takeLatest(shopAT.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
};

// unify all sagas here
export function* shopSagas () {
    yield all([
        call(fetchCollectionsStart),
    ]);
}