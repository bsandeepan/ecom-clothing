import {cartActionTypes as cartAT} from "./cart.types";

export const toggleCartHidden = () => ({
    type: cartAT.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
    type: cartAT.ADD_ITEM,
    payload: item
});
