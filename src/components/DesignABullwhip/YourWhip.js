import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DesignABullwhip.css';
import { totalmem } from 'os';

class YourWhip extends Component {

    calculateTotal = () => {
        let calculatedTotal = 0;
        calculatedTotal += this.props.state.bullwhip.designABullwhipReducer.whipLength.cost;
        calculatedTotal += this.props.state.bullwhip.designABullwhipReducer.handleLength.cost;
        calculatedTotal += this.props.state.bullwhip.designABullwhipReducer.concho.cost;

        this.setState({
            total: calculatedTotal,
        })
    }

    render() {
        return (
            <div >
                <h2>
                    Details about your whip:
                </h2>
                <div>{this.props.state.bullwhip.designABullwhipReducer.color1.name !== '' ?
                    <p className="capitalize">Color 1: {this.props.state.bullwhip.designABullwhipReducer.color1.name}</p> :
                    <p>Please Choose Your Whip's Color 1</p>}
                    {this.props.state.bullwhip.designABullwhipReducer.color2.name !== '' ?
                    <p className="capitalize">Color 2: {this.props.state.bullwhip.designABullwhipReducer.color2.name}</p> :
                    <p>Please Choose Your Whip's Color 2</p>}
                    {this.props.state.bullwhip.designABullwhipReducer.waxed === 'yes' ?
                    <p>Waxed</p> :
                    <p>Unwaxed</p>}
                    {this.props.state.bullwhip.designABullwhipReducer.pattern !== '' ?
                    <p className="capitalize">Handle Pattern: {this.props.state.bullwhip.designABullwhipReducer.pattern}</p> :
                    <p>Please Choose Your Whip's Handle Pattern</p>}
                    {this.props.state.bullwhip.designABullwhipReducer.whipLength.name !== '' ?
                    <p className="capitalize">Whip Length: {this.props.state.bullwhip.designABullwhipReducer.whipLength.name} Feet</p> :
                    <p>Please Choose Your Whip's Length</p>}
                    {this.props.state.bullwhip.designABullwhipReducer.handleLength.name !== '' ?
                    <p className="capitalize">Handle Length: {this.props.state.bullwhip.designABullwhipReducer.handleLength.name} Inches</p> :
                    <p>Please Choose Your Whip's Handle Length</p>}
                    {this.props.state.bullwhip.designABullwhipReducer.concho.name !== '' ?
                    <p className="capitalize">Concho: {this.props.state.bullwhip.designABullwhipReducer.concho.name}</p> :
                    <p>Please Choose Your Whip's Concho</p>}

                    {
                    this.props.state.bullwhip.designABullwhipReducer.color1.name !== '' &&
                    this.props.state.bullwhip.designABullwhipReducer.color2.name !== '' &&
                    this.props.state.bullwhip.designABullwhipReducer.pattern !== '' &&
                    this.props.state.bullwhip.designABullwhipReducer.whipLength.name !== '' &&
                    this.props.state.bullwhip.designABullwhipReducer.handleLength.name !== '' &&
                    this.props.state.bullwhip.designABullwhipReducer.concho.name !== '' 
                    ?
                    <div>
                    <p>Your total is: ${this.props.state.bullwhip.designABullwhipReducer.total}</p>
                    <button>
                        Proceed to Checkout
                    </button> 
                    </div>
                    :
                    <span></span>}


                    {/* <p className="capitalize">Color 2: {this.props.state.bullwhip.designABullwhipReducer.color2.name}</p>
                    <p className="capitalize">Handle Design: {this.props.state.bullwhip.designABullwhipReducer.pattern}</p>
                    <p className="capitalize">Whip Length: {this.props.state.bullwhip.designABullwhipReducer.whipLength.name}</p>
                    <p className="capitalize">Handle Length: {this.props.state.bullwhip.designABullwhipReducer.handleLength.name}</p>
                    <p className="capitalize">Concho: {this.props.state.bullwhip.designABullwhipReducer.concho.name}</p> */}
                </div>
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

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(YourWhip);