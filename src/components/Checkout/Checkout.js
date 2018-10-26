import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './checkout.css'

class Checkout extends Component {

    logout = () => {
        this.props.dispatch({ type: 'LOGOUT' });
    }

    editThisBullwhip = (index) => {
        this.props.dispatch({type: 'SET_BULLWHIP', payload: this.props.state.bullwhip.cartReducer[index].item})
        this.props.history.push("/bullwhip")
    }

    deleteThisBullwhip = (index) => {
        this.props.dispatch({type: 'DELETE_ITEM_FROM_CART', payload: index})
        this.calculateOrderTotal()
    }

    calculateOrderTotal = () => {
        let total = 0
        for (let cost of this.props.state.bullwhip.cartReducer) {
            total += cost.item.total
        }
        this.props.dispatch({type: 'SET_ORDER_TOTAL', payload: total})
    }

    addDummyItem = () => {
        this.props.dispatch({
            type: 'ADD_BULLWHIP_TO_CART', payload: {
                color1: { name: 'orange', url: '', unwaxedurl: '', id: '1' },
                color2: { name: 'green', url: '', unwaxedurl: '', id: '2' },
                waxed: 'yes',
                pattern: { name: 'celtic', id: '2' },
                whipLength: { name: '8', cost: '250', waxed_cost: '0', id: '3' },
                handleLength: { name: '10', cost: '5', id: '3' },
                concho: { name: 'silver concho', cost: '5', id: '2' },
                total: 260,
            }
        })
    }

    componentDidMount(){
        this.calculateOrderTotal()
    }

    // componeneDidUpdate(){
    //     this.calculateOrderTotal()
    // }

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
                                <div className="itemContainer">
                                    {this.props.state.bullwhip.cartReducer.map((item, index) => 
                                        <div className="cartItem" key={index}>
                                            <h4>Bullwhip</h4>
                                            <ul>
                                                <li className="capitalize">Color 1: {item.item.color1.name}</li>
                                                <li className="capitalize">Color 2: {item.item.color2.name}</li>
                                                <li className="capitalize">Handle Pattern: {item.item.pattern.name}</li>
                                                <li className="capitalize">Waxed: {item.item.waxed}
                                                    ( +${item.item.whipLength.waxed_cost} )</li>
                                                <li className="capitalize">Whip Length: {item.item.whipLength.name} Feet
                                            ( +${item.item.whipLength.cost} )</li>
                                                <li className="capitalize">Handle Length: {item.item.handleLength.name} Inches
                                            ( +${item.item.handleLength.cost} )</li>
                                                <li className="capitalize">Concho: {item.item.concho.name}
                                                    ( +${item.item.concho.cost} )</li>
                                            </ul>
                                            <p className="capitalize">Total: ${item.item.total}</p>
                                            <button onClick={() => this.editThisBullwhip(index)}>
                                                Edit This Bullwhip
                                            </button>
                                            <button onClick={() => this.deleteThisBullwhip(index)}>
                                                Remove This Bullwhip from Cart
                                            </button>
                                        </div>
                                    )
                                    }
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>Order Total: ${this.props.state.bullwhip.orderTotalReducer}</h3>
                        </div> 
                        <div className="shippingContainer">
                            <h3>Shipping Information</h3>
                            <form>
                                <label>
                                    First Name
                                    <input placeholder="First Name"></input>
                                </label>
                                <br></br>
                                <label>
                                    Last Name
                                    <input placeholder="Last Name"></input>
                                </label>
                                <br></br>
                                <label>
                                    Street Address
                                    <input placeholder="Street Address"></input>
                                </label>
                                <br></br>
                                <label>
                                    Country
                                    <input placeholder="Country"></input>
                                </label>
                                <br></br>
                                <label>
                                    Zip Code
                                    <input placeholder="Zip Code"></input>
                                </label>
                                <br></br>
                                <label>
                                    Shipping Notes
                                    <input placeholder="Shipping Notes"></input>
                                </label>
                            </form>
                        </div>
                        <div className="paymentContainer">
                            <h3>Payment Information</h3>
                            <button>
                                Finalize Order
                            </button>
                        </div>
                    </div>
                }
                <button onClick={this.addDummyItem}>
                    add dummy item
                </button>
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

