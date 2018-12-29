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
        this.props.dispatch({ type: 'UPDATE_SHIPPING_INFO', payload: { ...this.state } })
    }

    handleShippingState = (event) => {
        let cartShippingProfiles = []
        for (let item of this.props.state.bullwhip.cartReducer) {
            cartShippingProfiles.push(item.item.whipLength.shipping_profile_id)
        }
        console.log(cartShippingProfiles)
        this.setState(
            {
                ...this.state,
                [event.target.name]: event.target.value,
            }
        )
        this.props.dispatch({ type: 'UPDATE_SHIPPING_INFO', payload: { ...this.state } })
        if (event.target.value !== "United States") {
            this.props.dispatch({ type: 'DETERMINE_SHIPPING', payload: {domestic: false, cartShippingProfiles: cartShippingProfiles} })
        } else if (event.target.value === "United States") {
            this.props.dispatch({ type: 'DETERMINE_SHIPPING', payload: {domestic: true, cartShippingProfiles: cartShippingProfiles} })
        }
    }

    setReduxAddress = (event) => {
        this.props.dispatch({ type: 'UPDATE_SHIPPING_INFO', payload: { ...this.state } })
    }

    submitAddress = (event) => {
        event.preventDefault()
        this.props.dispatch({ type: 'POST_ADDRESS', payload: { ...this.state, order_total: this.props.state.bullwhip.orderTotalReducer } })
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
                            <input type="text" className="shippingFormInput" onChange={this.handleState} onBlur={this.setReduxAddress} value={this.state.first_name} name='first_name'></input>
                        </label>
                        <br></br>
                        <label className="shippingFormLabel">
                            Last Name*
                        <br></br>
                            <input type="text" className="shippingFormInput" onChange={this.handleState} onBlur={this.setReduxAddress} value={this.state.last_name} name='last_name'></input>
                        </label>
                        <br></br>
                        <label className="shippingFormLabel">
                            Email Address*
                        <br></br>
                            <input type="text" className="shippingFormInput" onChange={this.handleState} onBlur={this.setReduxAddress} value={this.state.email} name='email'></input>
                        </label>
                        <br></br>
                        <label className="shippingFormLabel">
                            Street Address*
                        <br></br>
                            <input type="text" className="shippingFormInput" onChange={this.handleState} onBlur={this.setReduxAddress} value={this.state.shipping_street_address} name='shipping_street_address'></input>
                        </label>
                        <br></br>
                        <label className="shippingFormLabel">
                            City*
                        <br></br>
                            <input type="text" className="shippingFormInput" onChange={this.handleState} onBlur={this.setReduxAddress} value={this.state.shipping_city} name='shipping_city'></input>
                        </label>
                        <br></br>
                        <label className="shippingFormLabel">
                            State*
                        <br></br>
                            <input type="text" className="shippingFormInput" onChange={this.handleState} onBlur={this.setReduxAddress} value={this.state.shipping_state} name='shipping_state'></input>
                        </label>
                        <br></br>
                        <label className="shippingFormLabel">
                            Country*
                        <br></br>
                            {/* <input type="text" className="shippingFormInput" onChange={this.handleState} onBlur={this.setReduxAddress} value={this.state.shipping_country} name='shipping_country'></input> */}
                            <select id="country" name="shipping_country" className="shippingFormInput" value={this.state.shipping_country} onChange={this.handleShippingState} onBlur={this.setReduxAddress}>
                                <option value="United States">United States</option>
                                <option value="Albania">Albania</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                <option value="Brazil">Brazil</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Cambodia">Cambodia</option>
                                <option value="Canada">Canada</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Croatia">Croatia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czech Republic">Czech Republic</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Dominican Republic">Dominican Republic</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Greece">Greece</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japan">Japan</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Korea, Republic of">Korea, Republic of</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="Netherlands Antilles">Netherlands Antilles</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Norway">Norway</option>
                                <option value="Panama">Panama</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Romania">Romania</option>
                                <option value="Russian Federation">Russian Federation</option>
                                <option value="Singapore">Singapore</option>
                                <option value="South Africa">South Africa</option>
                                <option value="Spain">Spain</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Kingdom">United Kingdom</option>
f                                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Viet Nam">Viet Nam</option>
                            </select>
                        </label>
                        <br></br>
                        <label className="shippingFormLabel">
                            Zip Code*
                        <br></br>
                            <input type="number" className="shippingFormInput" onChange={this.handleState} onBlur={this.setReduxAddress} value={this.state.shipping_zip} name='shipping_zip'></input>
                        </label>
                        <br></br>
                        <label className="shippingFormLabel">
                            Phone Number
                        <br></br>
                            <input type="text" className="shippingFormInput" onChange={this.handleState} onBlur={this.setReduxAddress} value={this.state.phone_number} name='phone_number'></input>
                        </label>
                        <br></br>
                        <label className="shippingFormLabel">
                            Shipping Notes
                        <br></br>
                            <textarea type="text" className="shippingFormInput" onChange={this.handleState} onBlur={this.setReduxAddress} value={this.state.order_notes} name='order_notes'></textarea>
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