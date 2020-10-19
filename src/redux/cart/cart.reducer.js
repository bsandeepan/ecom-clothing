import {cartActionTypes as cartAT} from "./cart.types";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartAT.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartAT.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case cartAT.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case cartAT.CLEAR_ITEM:
            return {
                ...state,
                cartItems: clearItemFromCart(state.cartItems, action.payload)
            };
        default:
            return state;
    }
};