import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrentWait extends Component {

    render() {
        return (
            <div className="currentWaitContainer">
            <h3>Important Info</h3>
            <ul>
            <li>The current wait for a Bullwhip is 4-6 weeks (it may take less).</li>
            <li>Shipping and handling costs a flat rate of $20 in the USA.</li>
            </ul>
            </div>  
        );
    }
}

const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps)(CurrentWait);