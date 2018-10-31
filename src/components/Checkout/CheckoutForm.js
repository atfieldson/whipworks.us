import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import './checkout.css';

class CheckoutForm extends Component {

  state = {
    errorModal: false,
    placeOrderModal: false,
    fullNameOnCard: '',
  }

  // constructor(props) {
  //   super(props);
  //   this.submit = this.submit.bind(this);
  //   this.openErrorModal = this.openErrorModal.bind(this);
  //   this.openPlaceOrderModal = this.openPlaceOrderModal.bind(this);
  //   this.placeOrderModal = false;
  //   this.errorModal = false;
  //   this.fullNameOnCard = '';
  // }

  openPlaceOrderModal = () => {
    this.setState({
      ...this.state,
      errorModal: true,
    })
    window.addEventListener('click', this.exitErrorModal, true);
    console.log('place order modal:', this.state.placeOrderModal);
  }

  openErrorModal = () => {
    this.setState({
      ...this.state,
      errorModal: true,
    })
    debugger;
    console.log('error modal:', this.state.errorModal); 
  }

  exitErrorModal = (event) => {
    if (event.target.classList.contains('errorModal')){
      this.triggerExit();
    } else if (event.target.classList.contains('submitChangeButton')){
      this.dispatchEditItem(event)
      this.triggerExit();
    }
  }

  triggerExit = () => {
    this.setState({
      errorModal: false,
    })
    window.removeEventListener('click', this.exitErrorModal, true)
    console.log("in exit modal", this.state); 
  }

  submit = async () => {
    let newAmount = this.props.state.bullwhip.orderTotalReducer * 100
    try {
      let { token } = await this.props.stripe.createToken({ name: "Name" });
      debugger;
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
      <div>
        <div className="shippingForm">
          <label className="fullNameInput">
            Full Name on Card*
          <br></br>
            <input placeholder="Full Name on Card" className="fullNameInput"></input>
          </label>
          <CardElement />
        </div>
        <div className="checkoutButtonsParent">
          <button
            className="checkoutButtons"
            onClick = {
              this.props.state.bullwhip.shippingAddressReducer.first_name === '' ||
              this.props.state.bullwhip.shippingAddressReducer.last_name === '' ||
              this.props.state.bullwhip.shippingAddressReducer.shipping_street_address === '' ||
              this.props.state.bullwhip.shippingAddressReducer.shipping_city === '' ||
              this.props.state.bullwhip.shippingAddressReducer.shipping_country === '' ||
              this.props.state.bullwhip.shippingAddressReducer.shipping_zip === '' ||
              this.fullNameOnCard === ''
              ?
              () => this.openErrorModal()
              :
              () => this.openPlaceOrderModal()
            }>
            Place Order
        </button>
        </div>
        {
        this.state.errorModal
        ?
        <div className="errorModal">
          <div className="errorModalContent">
            <div className="errorModalContainer">
              <img src={require('../DesignABullwhip/images/backgrounds/ww.jpg')} alt='WhipWorks' className='modalLogo' />
              <h3>Please complete all required fields (*)</h3>
              <button onClick={this.triggerExit} className="modalButton">Complete Fields</button>
            </div>
          </div>
        </div>
        :
        undefined
        }
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

