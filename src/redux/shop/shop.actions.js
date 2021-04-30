import { shopActionTypes as shopAT } from "./shop.types";

export const fetchCollectionsStart = () => ({
    type: shopAT.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: shopAT.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: shopAT.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

// !deprecated thunk async action
// export const fetchCollectionsStartAsync = () => {
//     return dispatch => {
//        // this code has been ported to saga
//     };
// };
