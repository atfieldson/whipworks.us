import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

class PaymentInfo extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        // User clicked submit
    }

    render() {
        return (
            <div className="paymentContainer">
                <h3>Payment Information</h3>
                <p>Would you like to complete the purchase?</p>
                <CardElement />
                <button onClick={this.submit}>Send</button>
            </div>
        );
    }
}

export default injectStripe(PaymentInfo);