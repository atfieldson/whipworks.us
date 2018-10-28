import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DesignABullwhip.css';

class WhipHandleDetails extends Component {

    render() {
        return (
            <div className="designContainer whipHandleDetails">
                <h3>Handle Details</h3>
                <h4>Color 1:</h4>
                    {this.props.state.bullwhip.designABullwhipReducer.color1.name === ''
                    ?
                    <p>Please pick your color 1</p>
                    :
                    <p className="capitalize">{this.props.state.bullwhip.designABullwhipReducer.color1.name}</p>
                    }
                <h4>Color 2:</h4>
                    {this.props.state.bullwhip.designABullwhipReducer.color2.name === ''
                    ?
                    <p>Please pick your color 1</p>
                    :
                    <p className="capitalize">{this.props.state.bullwhip.designABullwhipReducer.color2.name}</p>
                    }
                <h4>Waxed or Unwaxed?</h4>
                    {this.props.state.bullwhip.designABullwhipReducer.waxed === 'yes'
                    ?
                    <p>Waxed</p>
                    :
                    <p>Unwaxed</p>
                    }
                <h4>Handle Pattern:</h4>
                    {this.props.state.bullwhip.designABullwhipReducer.pattern.name === ''
                    ?
                    <p>Please pick your whip's handle pattern</p>
                    :
                    <p className="capitalize">{this.props.state.bullwhip.designABullwhipReducer.pattern.name}</p>
                    }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps)(WhipHandleDetails);