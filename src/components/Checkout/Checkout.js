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

    render() {
        return (
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
                            <button onClick={() => this.props.history.push("/bullwhip")}>
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
                <button onClick={this.addDummyItem}>
                    Add Dummy Item
                </button>
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

