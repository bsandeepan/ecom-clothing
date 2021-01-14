import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {StripeCheckoutButton, FakeStripeCardInfo} from "../../components/stripe-button/stripe-button.component";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
    <section className="checkout-page">
        <header className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </header>
        {cartItems.map(
            cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        )}
        <footer>
            <div className="total">
                <span>Total: ${total}</span>
            </div>
        </footer>
        <FakeStripeCardInfo />
        <StripeCheckoutButton price={total} />
    </section>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});
export default connect(mapStateToProps)(CheckoutPage);
