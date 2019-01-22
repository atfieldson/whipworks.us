import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class PaymentInfo extends Component {


    render() {
        return (

            <div className="paymentContainer">
                <h3 className="montserrat">Payment Information</h3>
                <StripeProvider apiKey={"pk_test_JRb8f197Xg9h1XrLvDc6HAoh"}>
                {/* <StripeProvider apiKey={"pk_live_hwf5CEgiFZkiSwugZu4saC6q"}> */}
                    <Elements>
                        <CheckoutForm />
                    </Elements>
                </StripeProvider>
            </div>

        );
    }
}

export default PaymentInfo;