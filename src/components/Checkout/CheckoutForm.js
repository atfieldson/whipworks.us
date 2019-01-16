import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';

class CheckoutForm extends Component {

  state = {
    errorModal: false,
    placeOrderModal: false,
    fullNameOnCard: '',
    stripeToken: '',
  }

  handleFullName = (event) => {
    this.setState({
      fullNameOnCard: event.target.value,
    })
  }


  //-----------------MODALS---------------------//
  //Place Order Modal
  openPlaceOrderModal = () => {
    this.setState({
      ...this.state,
      placeOrderModal: true,
    })
    window.addEventListener('click', this.exitPlaceOrderModal, true);
    console.log('place order modal:', this.state.placeOrderModal);
  }

  exitPlaceOrderModal = (event) => {
    if (event.target.classList.contains('placeOrderModal')) {
      this.triggerPlaceOrderExit();
    }
    // else if (event.target.classList.contains('submitChangeButton')) {
    //   this.dispatchEditItem(event)
    //   this.triggerPlaceOrderExit();
    // }
  }

  triggerPlaceOrderExit = () => {
    this.setState({
      placeOrderModal: false,
    })
    window.removeEventListener('click', this.exitPlaceOrderModal, true)
    console.log("in exit modal", this.state);
  }
  //End Place order Modal

  //Error Modal, Form incomplete modal
  openErrorModal = () => {
    this.setState({
      ...this.state,
      errorModal: true,
    })
    window.addEventListener('click', this.exitErrorModal, true);
    console.log('error modal:', this.state.errorModal);
  }

  exitErrorModal = (event) => {
    if (event.target.classList.contains('errorModal')) {
      this.triggerErrorExit();
    }
  }

  triggerErrorExit = () => {
    this.setState({
      errorModal: false,
    })
    window.removeEventListener('click', this.exitErrorModal, true)
    console.log("in exit modal", this.state);
  }
  //end Error Modal

  checkForm = async () => {
    //If stripe token isn't succesfully created, or one of the fields is empty, error modal will open,
    //else, success modal will open
    try {
      let { token } = await this.props.stripe.createToken({ name: this.state.fullNameOnCard });
      this.setState({
        stripeToken: token.id,
      })
      if (this.state.stripeToken === '' ||
        this.props.state.bullwhip.shippingAddressReducer.first_name === '' ||
        this.props.state.bullwhip.shippingAddressReducer.last_name === '' ||
        this.props.state.bullwhip.shippingAddressReducer.email === '' ||
        this.props.state.bullwhip.shippingAddressReducer.shipping_street_address === '' ||
        this.props.state.bullwhip.shippingAddressReducer.shipping_city === '' ||
        this.props.state.bullwhip.shippingAddressReducer.shipping_state === '' ||
        this.props.state.bullwhip.shippingAddressReducer.shipping_country === '' ||
        this.props.state.bullwhip.shippingAddressReducer.shipping_zip === '' ||
        this.fullNameOnCard === ''
      ) {
        this.openErrorModal()
      } else {
        this.openPlaceOrderModal()
      }
    } catch (error) {
      this.openErrorModal()
    }
  }

  submitOrder = () => {

    let newAmount = (this.props.state.bullwhip.orderTotalReducer + this.props.state.bullwhip.shippingTotal.total) * 100
    this.props.dispatch({type: 'PLACE_ORDER', payload: {
      stripe: {token: this.state.stripeToken, amount: newAmount},
      order: {first_name: this.props.state.bullwhip.shippingAddressReducer.first_name,
              last_name: this.props.state.bullwhip.shippingAddressReducer.last_name,
              email: this.props.state.bullwhip.shippingAddressReducer.email,
              shipping_street_address: this.props.state.bullwhip.shippingAddressReducer.shipping_street_address,
              shipping_city: this.props.state.bullwhip.shippingAddressReducer.shipping_city,
              shipping_state: this.props.state.bullwhip.shippingAddressReducer.shipping_state,
              shipping_country: this.props.state.bullwhip.shippingAddressReducer.shipping_country,
              shipping_zip: this.props.state.bullwhip.shippingAddressReducer.shipping_zip,
              phone_number: this.props.state.bullwhip.shippingAddressReducer.phone_number,
              shipping_cost: this.props.state.bullwhip.shippingTotal.total,
              order_total: this.props.state.bullwhip.orderTotalReducer,
              order_notes: this.props.state.bullwhip.shippingAddressReducer.order_notes,
              },
      bullwhips: this.props.state.bullwhip.cartReducer,
      } 
    })//end dispatch 
    // this.props.dispatch({type: 'COMPLETED_ORDER'})
    let firstName = this.props.state.bullwhip.shippingAddressReducer.first_name
    let lastName = this.props.state.bullwhip.shippingAddressReducer.last_name
    ReactGA.event({
      category: 'Orders',
      action: 'Placed order',
      label: firstName + ' ' + lastName + ' ' + ' total:' + newAmount / 100
    })
  } 
  

  render() {
    return (
      <div className='paymentInfoContainer'>
      <a target="_blank" href="https://stripe.com/us/customers" >
        <img src={require("./images/stripe-payment-icon.png")} className='stripeImage' alt="Stripe"></img>
        </a>
        <div className="shippingForm">
          <label>
            Full Name on Card*
          <br></br>
            <input className="fullNameInput" onChange={this.handleFullName}></input>
          </label>
          <CardElement />
        </div>
        <div className="checkoutButtonsParent">
          <button className="checkoutButtons" onClick={this.checkForm}>
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
                  <h4>Be sure to double check Card information</h4>
                  <button onClick={this.triggerErrorExit} className="modalButton">Complete Fields</button>
                </div>
              </div>
            </div>
            :
            undefined
        }
        {
          this.state.placeOrderModal
            ?
            <div className="placeOrderModal">
              <div className="placeOrderModalContent">
                <div className="placeOrderModalContainer">
                  <img src={require('../DesignABullwhip/images/backgrounds/ww.jpg')} alt='WhipWorks' className='modalLogo' />
                  <h3>Please double check your information:</h3>
                  <p>First Name: {this.props.state.bullwhip.shippingAddressReducer.first_name}</p>
                  <p>Last Name: {this.props.state.bullwhip.shippingAddressReducer.last_name}</p>
                  <p>Street Address: {this.props.state.bullwhip.shippingAddressReducer.shipping_street_address}</p>
                  <p>City: {this.props.state.bullwhip.shippingAddressReducer.shipping_city}</p>
                  <p>State: {this.props.state.bullwhip.shippingAddressReducer.shipping_state}</p>
                  <p>Country: {this.props.state.bullwhip.shippingAddressReducer.shipping_country}</p>
                  <p>Zip Code: {this.props.state.bullwhip.shippingAddressReducer.shipping_zip}</p>
                  <p>Full Name on Card: {this.state.fullNameOnCard}</p>
                  <p>Card Verified</p>
                  <button onClick={this.triggerPlaceOrderExit} className="modalButton">Edit Information</button>
                  <button onClick={this.submitOrder} className="modalButton">Place Order</button>
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

