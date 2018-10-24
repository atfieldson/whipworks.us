import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DesignABullwhip.css';

class YourWhip extends Component {

    render() {
        return (
            <div >
                <h2>
                    Details about your whip:
                </h2>
                <div>
                    <p className="capitalize">Color 1: {this.props.state.bullwhip.designABullwhipReducer.color1.name}</p>
                    <p className="capitalize">Color 2: {this.props.state.bullwhip.designABullwhipReducer.color2.name}</p>
                    <p className="capitalize">Handle Design: {this.props.state.bullwhip.designABullwhipReducer.pattern}</p>
                    <p className="capitalize">Whip Length: {this.props.state.bullwhip.designABullwhipReducer.whipLength.name}</p>
                    <p className="capitalize">Handle Length: {this.props.state.bullwhip.designABullwhipReducer.handleLength.name}</p>
                    <p className="capitalize">Concho: {this.props.state.bullwhip.designABullwhipReducer.concho.name}</p>
                </div>
                <button>
                    Proceed to Checkout
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

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(YourWhip);