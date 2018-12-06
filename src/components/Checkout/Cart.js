import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Cart extends Component {
    editThisBullwhip = (index) => {
        this.props.dispatch({ type: 'SET_BULLWHIP', payload: this.props.state.bullwhip.cartReducer[index].item })
        this.props.history.push("/bullwhip")
    }

    deleteThisBullwhip = (cost, index) => {
        this.props.dispatch({ type: 'DELETE_ITEM_FROM_CART', payload: index })
        this.props.dispatch({ type: 'SUBTRACT_FROM_TOTAL', payload: cost })
    }

    calculateOrderTotal = () => {
        let total = 0
        for (let cost of this.props.state.bullwhip.cartReducer) {
            total += cost.item.total
        }
        this.props.dispatch({ type: 'SET_ORDER_TOTAL', payload: total })
    }

    componentDidMount() {
        this.calculateOrderTotal()
    }

    render() {
        return (
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
                                        {item.item.waxed === 'yes'
                                        ?
                                        <li className="capitalize">>Waxed: {item.item.waxed}( +${item.item.whipLength.waxed_cost} )</li>
                                        :
                                        <li className="capitalize"> Waxed: {item.item.waxed}</li>
                                        }
                                        <li className="capitalize">Whip Length: {item.item.whipLength.name} Feet
                                            ( +${item.item.whipLength.cost} )</li>
                                        <li className="capitalize">Handle Length: {item.item.handleLength.name} Inches
                                            ( +${item.item.handleLength.cost} )</li>
                                        <li className="capitalize">Concho: {item.item.concho.name}
                                            ( +${item.item.concho.cost} )</li>
                                    </ul>
                                    <p className="capitalize">Total: ${item.item.total}</p>
                                    <div className="checkoutButtonsParent">
                                        <button onClick={() => this.editThisBullwhip(index)} className="checkoutButtons">
                                            Edit This Bullwhip
                                        </button>
                                        <button onClick={() => this.deleteThisBullwhip(item.item.total, index)} className="checkoutButtons">
                                            Remove This Bullwhip from Cart
                                        </button>
                                    </div>
                                </div>
                            )
                            }
                        </div>
                    </div>
                    <div>
                        <p>Total: ${this.props.state.bullwhip.orderTotalReducer}</p>
                        <p>Flat rate domestic shipping: $20</p>
                        <h3>Order Total: ${this.props.state.bullwhip.orderTotalReducer + 20}</h3>
                    </div>
                </div>

            </div>
        );
    }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
    state
});

const cartWithRouter = withRouter(Cart)


// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(cartWithRouter);