import {cartActionTypes as cartAT} from "./cart.types";

export const toggleCartHidden = () => ({
    type: cartAT.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
    type: cartAT.ADD_ITEM,
    payload: item
});

export const removeItem = (item) => ({
    type: cartAT.REMOVE_ITEM,
    payload: item
});

export const clearItem = (item) => ({
    type: cartAT.CLEAR_ITEM,
    payload: item
});
