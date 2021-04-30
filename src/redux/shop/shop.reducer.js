import { shopActionTypes as shopAT } from "./shop.types";

export const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
};

export const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopAT.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case shopAT.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case shopAT.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
};
