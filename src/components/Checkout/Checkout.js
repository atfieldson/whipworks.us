import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './checkout.css'

class Checkout extends Component {

    logout = () => {
        this.props.dispatch({ type: 'LOGOUT' });
    }

    render() {
        return (
            <div className="checkoutContainer">
                <h1>
                    Checkout
                </h1>
                {this.props.state.bullwhip.cartReducer.length === 0 
                    ?
                    <div className="incompleteContainer">
                        <h3>Your cart is currently empty</h3>
                        <h4>Head over to Design a Bullwhip to make your perfect Bullwhip!</h4>
                        <button onClick={() => this.props.history.push("/bullwhip")}>
                            Design a Bullwhip
                        </button>
                    </div>
                    :
                    <div>
                        <div className="orderContainer">
                            <div className="cartContainer">
                                <h3>Your Cart</h3>
                                <ul>
                                    <li className="capitalize">Color 1: {this.props.state.bullwhip.cartReducer.item.color1.name}</li>
                                    <li className="capitalize">Color 2: {this.props.state.bullwhip.cartReducer.item.color2.name}</li>
                                    <li className="capitalize">Handle Pattern: {this.props.state.bullwhip.cartReducer.item.pattern.name}</li>
                                    <li className="capitalize">Waxed: {this.props.state.bullwhip.cartReducer.item.waxed}
                                        ( +${this.props.state.bullwhip.cartReducer.item.whipLength.waxed_cost} )</li>
                                    <li className="capitalize">Whip Length: {this.props.state.bullwhip.cartReducer.item.whipLength.name} Feet
                                    ( +${this.props.state.bullwhip.cartReducer.item.whipLength.cost} )</li>
                                    <li className="capitalize">Handle Length: {this.props.state.bullwhip.cartReducer.item.handleLength.name} Inches
                                    ( +${this.props.state.bullwhip.cartReducer.item.handleLength.cost} )</li>
                                    <li className="capitalize">Concho: {this.props.state.bullwhip.cartReducer.item.concho.name}
                                        ( +${this.props.state.bullwhip.cartReducer.item.concho.cost} )</li>
                                    <li className="capitalize">Total: ${this.props.state.bullwhip.cartReducer.item.total}</li>
                                </ul>
                                <button onClick={() => this.props.history.push("/bullwhip")}>
                                    Edit Your Bullwhip
                                </button>
                            </div>
                            <div className="paymentContainer">
                                <h3>Payment Information</h3>
                                <button>
                                    Finalize Order
                                </button>
                            </div>
                        </div>
                    </div>
                }


            </div >
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

