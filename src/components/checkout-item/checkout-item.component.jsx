import React from 'react';
import { connect } from "react-redux";

import { addItem, clearItem, removeItem } from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, addItem, clearItem, removeItem  }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return(
        <section className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>-</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>+</div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" 
                onClick={() => clearItem(cartItem)}>&#x2717;</div>
        </section>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item)),
    clearItem: item => dispatch(clearItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
