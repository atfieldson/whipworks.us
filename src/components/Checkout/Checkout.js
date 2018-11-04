import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ShippingInfo from './ShippingInfo';
import PaymentInfo from './PaymentInfo';
import Cart from './Cart';
import './checkout.css'

class Checkout extends Component {

    addDummyItem = () => {
        this.props.dispatch({
            type: 'ADD_BULLWHIP_TO_CART', payload: {
                color1: { name: 'orange', url: 'blackRightWaxed.jpg', unwaxedurl: 'blackRight.jpg', id: '3', spool_url: "black.jpg" },
                color2: { name: 'green', url: 'whiteLeftWaxed.jpg', unwaxedurl: 'whiteLeft.jpg', id: '35', spool_url: "white.jpg" },
                waxed: 'yes',
                pattern: { name: "emerald", id: "5" },
                whipLength: { name: "10", cost: "400", waxed_cost: "30", id: "8" },
                handleLength: { name: "12", cost: "10", id: "3" },
                concho: { name: "celtic silver", cost: "0", id: "1" },
                total: 440,
            }
        })
    }

    componentWillUnmount() {
        if (this.props.state.bullwhip.orderPlacedReducer === 'yes') {
            this.props.dispatch({ type: 'RESET_DESIGN_A_BULLWHIP' });
            this.props.dispatch({ type: 'RESET_CART_REDUCER' });
            this.props.dispatch({ type: 'RESET_TOTAL_REDUCER' });
            this.props.dispatch({ type: 'RESET_SHIPPING_ADDRESS_REDUCER' });
            this.props.dispatch({ type: 'LEFT_COMPLETED_PAGE' })
        } else {
            this.props.dispatch({ type: 'LEFT_COMPLETED_PAGE' })
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.state.bullwhip.orderPlacedReducer === "no"
                        ?
                        <div className="checkoutComponent">
                            <h1>
                                Checkout
                    </h1>
                            {this.props.state.bullwhip.cartReducer.length === 0
                                ?
                                <div className="incompleteContainer">
                                    <div className="incomplete">
                                        <h3>Your cart is currently empty</h3>
                                        <h4>Head over to Design a Bullwhip to make your perfect Bullwhip!</h4>
                                        <button onClick={() => this.props.history.push("/bullwhip")} className="checkoutButtons">
                                            Design a Bullwhip
                            </button>
                                    </div>
                                </div>
                                :
                                <div className="checkout">
                                    <div className="checkoutContainer">
                                        <ShippingInfo />
                                        <PaymentInfo />
                                    </div >
                                    <Cart />
                                </div>
                            }
                            {/* <button onClick={this.addDummyItem}>
                    Add Dummy Item
                    </button> */}
                        </div>
                        :
                        <div className="checkoutComponent">
                            <div className="aboutBullwhipContainer" >
                                <h2>Thank you for your order!</h2>
                                <h4>You will be receiving an email from the whip maker Adam shortly</h4>
                                <p>In the mean time, you can check out the <a href="https://www.youtube.com/channel/UCy1U3l1nwB3TwFbCV3Z5peQ">WhipWorks</a> youtube channel where you can learn more about the <a href="https://www.youtube.com/watch?v=Tl0iQVrDZcU&t=2s">Anatomy of a Bullwhip</a>, or how to <a href="https://www.youtube.com/watch?v=CwDiircBQlo&t=1s">Replace your Whips Fall</a></p>
                                <h4>Thanks again for the order, I'm excited to add your whip to the gallery</h4>
                                <h4>Happy Cracking, Adam</h4>
                                <div className="thanksImageContainer">
                                    <img src={require("../Checkout/images/thanks/BW135FullThumb.jpg")} className="thanksPics" />
                                    <img src={require("../Checkout/images/thanks/BW133FullThumb.jpg")} className="thanksPics" />
                                    <img src={require("../Checkout/images/thanks/BW138FullThumb.jpg")} className="thanksPics" />
                                    <img src={require("../Checkout/images/thanks/BW136FullThumb.jpg")} className="thanksPics" />
                                </div>
                            </div>
                        </div>
                }
            </div>
        );
    }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
    state,
});

const checkoutWithRouter = withRouter(Checkout)

export default connect(mapStateToProps)(checkoutWithRouter);

