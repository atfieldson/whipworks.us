import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DesignABullwhip.css';

class WaxChooser extends Component {

    updateWaxed = (event) => {
        this.setState({
            ...this.state,
            waxed: event.target.value
        })
        this.props.dispatch({ type: 'SET_WHIP_WAXED', payload: event.target.value })
        this.props.dispatch({ type: 'SET_WHIP_TOTAL' })
    }

    render() {
        return (
            <div className="designContainer">
                <h2>
                    Waxed or Unwaxed?
                </h2>
                <button value="yes" onClick={this.updateWaxed}>Waxed</button>
                <button value="no" onClick={this.updateWaxed}>Unwaxed</button>
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
export default connect(mapStateToProps)(WaxChooser);