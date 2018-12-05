import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DesignABullwhip.css';
import './handleChooser.css';

class WhipHandleDetails extends Component {

    createBackgroundClass = (color) => {
        //removes spaces
        let name = color.replace(/\s/g, '')
        if (color === 'white' || color === 'turquoise' || color === 'silver' || color === 'yellow'){
            return `capitalize handleDetailsSpoolWhite ${name}`
        } else{
            return `capitalize handleDetailsSpool ${name}`
        } 
    }

    createHandleBackgroundClass = (handle) => {
        let name = handle.replace(/\s/g, '')
        return `capitalize handleDetailsPattern ${name}`
    }
    

    render() {
        return (
            <div className="designContainer whipHandleDetails">
                <h3>Handle Details</h3>
                <h4>Color 1:</h4>
                    {this.props.state.bullwhip.designABullwhipReducer.color1.name === ''
                    ?
                    <div className="emptyDetailsSpool">
                    <p>Please pick your color 1</p>
                    </div>
                    :
                    <div className={this.createBackgroundClass(this.props.state.bullwhip.designABullwhipReducer.color1.name)}>
                    <p>
                        {this.props.state.bullwhip.designABullwhipReducer.color1.name}
                    </p>  
                    </div>
                    }
                <h4>Color 2:</h4>
                    {this.props.state.bullwhip.designABullwhipReducer.color2.name === ''
                    ?
                    <div className="emptyDetailsSpool">
                    <p>Please pick your color 2</p>
                    </div>
                    :
                    <div className={this.createBackgroundClass(this.props.state.bullwhip.designABullwhipReducer.color2.name)}>
                    <p>
                        {this.props.state.bullwhip.designABullwhipReducer.color2.name}
                    </p>  
                    </div>   
                    }
                    <h4>Waxed Option</h4>
                    {this.props.state.bullwhip.designABullwhipReducer.waxed === 'yes'
                    ?
                    <h3 className="waxedSelection">Waxed</h3>
                    :
                    <h3 className="waxedSelection">Unwaxed</h3>
                    }
                <h4>Handle Pattern:</h4>
                    {this.props.state.bullwhip.designABullwhipReducer.pattern.name === ''
                    ?
                    <div className="emptyDetailsHandle">
                    <p>Please pick your Handle Pattern</p>
                    </div>
                    :
                    <div className={this.createHandleBackgroundClass(this.props.state.bullwhip.designABullwhipReducer.pattern.name)}>
                    <p>
                        {this.props.state.bullwhip.designABullwhipReducer.pattern.name}
                    </p>  
                    </div>  
                    }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps)(WhipHandleDetails);