import React, { Component } from 'react';
import { connect } from 'react-redux';
import './checkout.css'

class ShippingInfo extends Component {

    state = {
        first_name: '',
        last_name: '',
        shipping_street_address: '',
        shipping_city: '',
        shipping_country: '',
        shipping_zip: '',
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
    }

    submitAddress = (event) => {
        event.preventDefault()
        this.props.dispatch({type: 'POST_ADDRESS', payload: {...this.state, order_total: this.props.state.bullwhip.orderTotalReducer}})
    }

    render() {
        return (
            <div>
            <h3>Shipping and Payment Information</h3>
            < div className="shippingContainer">
                <form className="shippingForm">
                    <label className="shippingFormLabel">
                        First Name
                        <br></br>
                        <input type="text" placeholder="First Name" className= "shippingFormInput" onChange={this.handleState} value={this.state.first_name} name='first_name'></input>
                    </label>
                    <br></br>
                    <label className="shippingFormLabel">
                        Last Name
                        <br></br>
                        <input type="text" placeholder="Last Name" className= "shippingFormInput" onChange={this.handleState} value={this.state.last_name} name='last_name'></input>
                    </label>
                    <br></br>
                    <label className="shippingFormLabel">
                        Street Address
                        <br></br>
                        <input type="text" placeholder="Street Address" className= "shippingFormInput" onChange={this.handleState} value={this.state.shipping_street_address} name='shipping_street_address'></input>
                    </label>
                    <br></br>
                    <label className="shippingFormLabel">
                        City
                        <br></br>
                        <input type="text" placeholder="City" className= "shippingFormInput" onChange={this.handleState} value={this.state.shipping_city} name='shipping_city'></input>
                    </label>
                    <br></br>
                    <label className="shippingFormLabel">
                        Country
                        <br></br>
                        <input type="text" placeholder="Country" className= "shippingFormInput" onChange={this.handleState} value={this.state.shipping_country} name='shipping_country'></input>
                    </label>
                    <br></br>
                    <label className="shippingFormLabel">
                        Zip Code
                        <br></br>
                        <input type="number" placeholder="Zip Code" className= "shippingFormInput" onChange={this.handleState} value={this.state.shipping_zip} name='shipping_zip'></input>
                    </label>
                    <br></br>
                    <label className="shippingFormLabel">
                        Shipping Notes
                        <br></br>
                        <textarea type="text" placeholder="Shipping Notes" className= "shippingFormInput" onChange={this.handleState} value={this.state.order_notes} name='order_notes'></textarea>
                    </label>
                    {/* <br></br>
                    <label>
                        Submit Address
                    <input type="submit" onClick={this.submitAddress}></input>
                    </label> */}
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