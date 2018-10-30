import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import './checkout.css';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let newAmount = this.props.state.bullwhip.orderTotalReducer * 100
    try {
      let { token } = await this.props.stripe.createToken({ name: "Name" });
      // debugger;
      let response = await axios.post('/charge', {
        token: token.id,
        amount: newAmount,
      })
      console.log('posted token to stripe:', response)
    }
    catch (error) {
      console.log('error posting to stripe:', error)
    }

  }

  render() {
    return (
      <div className="checkout">
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state,
});

const checkoutWithStripe = injectStripe(CheckoutForm)

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(checkoutWithStripe);

// export default injectStripe(CheckoutForm)

