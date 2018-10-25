import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';

class Checkout extends Component {
    logout = () => {
        this.props.dispatch({ type: 'LOGOUT' });
    }

    render() {
        return (
            <div >
                <h1>
                    Checkout        
                </h1>
                <button onClick={() => this.props.history.push("/bullwhip")}>
                    Edit Your Bullwhip
                </button>
                <button>
                    Finalize Order
                </button>
            </div>
        );
    }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
    user: state.user,
});

const checkoutWithRouter = withRouter(Checkout)

export default connect(mapStateToProps)(checkoutWithRouter);

