import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const   onToken = token => {
    console.log(token);
    alert("Payment Successful.");
};

export const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    // This is publishable stripe api key of SandeepanB
    const publishableKey = "pk_test_51I9OfjBvOOybtT1vBks4zwywg5cuBxj9QhTrxy7yHZMd0LqSLmIhkcRwoh1iPOL5mA0n3vtV5fjXWwy9SaaqIf8y00eZY9xUlk";

    return (
        <StripeCheckout 
        label="Pay Now"
        name="Ecom Crown Clothes"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        currency="USD"
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    );
}

export const FakeStripeCardInfo = () => {
    return (
        <div>
            <p style={{color:"red", fontSize:"20px", marginTop:"40px"}}>
                Use this fake Stripe American Express Card: <br/>
                Card No: 3782-8224-6310-005 with CVV: 1234 <br/>
                and Expiry Date is any future date from today.
            </p>
        </div>
    );
}