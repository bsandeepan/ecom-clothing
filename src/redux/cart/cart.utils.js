export const addItemToCart = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
    
    return existingCartItem 
    ? (cartItems.map(cartItem => cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem)) 
    : [...cartItems, { ...itemToAdd, quantity: 1}]
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToRemove.id);

    return existingCartItem.quantity === 1
    ? clearItemFromCart(cartItems, itemToRemove)
    : (cartItems.map(cartItem => cartItem.id === itemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem))
};

export const clearItemFromCart = (cartItems, itemToClear) => cartItems.filter(cartItem => cartItem.id !== itemToClear.id);
