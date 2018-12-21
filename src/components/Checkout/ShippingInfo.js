import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentWait from './CurrentWait';

class ShippingInfo extends Component {

    state = {
        first_name: '',
        last_name: '',
        email: '',
        shipping_street_address: '',
        shipping_city: '',
        shipping_state: '',
        shipping_country: '',
        shipping_zip: '',
        phone_number: '',
        shipping_cost: 20,
        order_total: 0,
        order_notes: '',
    }

    handleState = (event) => {
        this.setState(
            {
                ...this.state,
                [event.target.name]: event.target.value,
            }
        )
        this.props.dispatch({type: 'UPDATE_SHIPPING_INFO', payload: {...this.state}})
    }

    setReduxAddress = (event) => {
        this.props.dispatch({type: 'UPDATE_SHIPPING_INFO', payload: {...this.state}})
    }

    submitAddress = (event) => {
        event.preventDefault()
        this.props.dispatch({type: 'POST_ADDRESS', payload: {...this.state, order_total: this.props.state.bullwhip.orderTotalReducer}})
    }

    render() {
        return (
            <div>
            <h3>Shipping and Payment Information</h3>
            <CurrentWait />
            < div className="shippingContainer">
                <form className="shippingForm">
                    <label className="shippingFormLabel">
                        First Name*
                        <br></br>
                        <input type="text" className= "shippingFormInput" onChange={this.handleState} onBlur={this.setReduxAddress} value={this.state.first_name} name='first_name'></input>
                    </label>
                    <br></br>
                    <label className="shippingFormLabel">
                        Last Name*
                        <br></br>
                        <input type="text" className= "shippingFormInput" onChange={this.handleState} onBlur={this.setReduxAddress} value={this.state.last_name} name='last_name'></input>
                    </label>
                    <br></br>
                    <label className="shippingFormLabel">
                        Email Address*
                        <br></br>
                        <input type="text" className= "shippingFormInput" onChange={this.handleState} onBlur={this.setReduxAddress} value={this.state.email} name='email'></input>
                    </label>
                    <br></br>
                    <label className="shippingFormLabel">
                        Street Address*
                        <br></br>
                        <input type="text" className= "shippingFormInput" onChange={this.handleState} onBlur={this.setReduxAddress} value={this.state.shipping_street_address} name='shipping_street_address'></input>
                    </label>
                    <br></br>
                    <label className="shippingFormLabel">
                        City*
                        <br></br>
                        <input type="text" className= "shippingFormInput" onChange={this.handleState} onBlur={this.setReduxAddress} value={this.state.shipping_city} name='shipping_city'></input>
                    </label>
                    <br></br>
                    <label className="shippingFormLabel">
                        State*
                        <br></br>
                        <input type="text" className= "shippingFormInput" onChange={this.handleState} onBlur={this.setReduxAddress} value={this.state.shipping_state} name='shipping_state'></input>
                    </label>
                    <br></br>
                    <label className="shippingFormLabel">
                        Country*
                        <br></br>
                        <input type="text" className= "shippingFormInput" onChange={this.handleState} onBlur={this.setReduxAddress} value={this.state.shipping_country} name='shipping_country'></input>
                    </label>
                    <br></br>
                    <label className="shippingFormLabel">
                        Zip Code*
                        <br></br>
                        <input type="number" className= "shippingFormInput" onChange={this.handleState} onBlur={this.setReduxAddress} value={this.state.shipping_zip} name='shipping_zip'></input>
                    </label>
                    <br></br>
                    <label className="shippingFormLabel">
                        Phone Number
                        <br></br>
                        <input type="text" className= "shippingFormInput" onChange={this.handleState} onBlur={this.setReduxAddress} value={this.state.phone_number} name='phone_number'></input>
                    </label>
                    <br></br>
                    <label className="shippingFormLabel">
                        Shipping Notes
                        <br></br>
                        <textarea type="text" className= "shippingFormInput" onChange={this.handleState} onBlur={this.setReduxAddress} value={this.state.order_notes} name='order_notes'></textarea>
                    </label>
                </form>
            </div>  
            </div>  
        );
    }
}

const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps)(ShippingInfo);