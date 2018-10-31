import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DesignABullwhip.css';
import { withRouter } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import './spools.css';
import './handleChooser.css';
import './ConchoChooser.css';

class YourWhip extends Component {


    createBackgroundClass = (color) => {
        //removes spaces
        let name = color.replace(/\s/g, '')

        if (color === 'white' || color === 'turquoise' || color === 'silver' || color === 'yellow') {
            return `capitalize handleDetailsSpoolWhite ${name}`
        } else {
            let name = color.replace(/\s/g, '')
            return `capitalize handleDetailsSpool ${name}`
        }
    }

    createHandleBackgroundClass = (handle) => {
        let name = handle.replace(/\s/g, '')
        return `capitalize handleDetailsPattern ${name}`
    }

    createConchoBackgroundClass = (concho) => {
        let newClass = concho.replace(/\s/g, '')
        return `capitalize conchoDetails ${newClass}`
    }

    addBullwhipToCart = () => {
        this.props.dispatch({ type: 'ADD_BULLWHIP_TO_CART', payload: this.props.state.bullwhip.designABullwhipReducer })
    }


    render() {
        return (
            <div className="designContainer yourWhip">
                <h2>
                    Complete all fields and buy your Bullwhip
                </h2>
                <div>
                    <h4>Color 1:</h4>
                    {this.props.state.bullwhip.designABullwhipReducer.color1.name !== '' 
                    ?
                    <div className={this.createBackgroundClass(this.props.state.bullwhip.designABullwhipReducer.color1.name)}>
                        <p>
                            {this.props.state.bullwhip.designABullwhipReducer.color1.name}
                        </p>
                    </div>
                    :
                    <p>Please Choose Your Whip's Color 1</p>
                    }
                    <h4>Color 2:</h4>
                    {this.props.state.bullwhip.designABullwhipReducer.color2.name !== '' 
                    ?
                    <div className={this.createBackgroundClass(this.props.state.bullwhip.designABullwhipReducer.color2.name)}>
                        <p>
                            {this.props.state.bullwhip.designABullwhipReducer.color2.name}
                        </p>
                    </div>
                    :
                    <p>Please Choose Your Whip's Color 2</p>
                    }
                    {this.props.state.bullwhip.designABullwhipReducer.waxed === 'yes' 
                    ?
                    <p>Waxed</p> 
                    :
                    <p>Unwaxed</p>
                    }
                    <h4>Handle Pattern:</h4>
                    {this.props.state.bullwhip.designABullwhipReducer.pattern.name !== '' 
                    ?
                    <div className={this.createHandleBackgroundClass(this.props.state.bullwhip.designABullwhipReducer.pattern.name)}>
                        <p>
                            {this.props.state.bullwhip.designABullwhipReducer.pattern.name}
                        </p>  
                    </div>  
                    :
                    <p>Please Choose Your Whip's Handle Pattern</p>
                    }
                    {this.props.state.bullwhip.designABullwhipReducer.whipLength.name !== '' 
                    ?
                    <p className="capitalize">Whip Length: {this.props.state.bullwhip.designABullwhipReducer.whipLength.name} Feet</p> 
                    :
                    <p>Please Choose Your Whip's Length</p>
                    }
                    {this.props.state.bullwhip.designABullwhipReducer.handleLength.name !== '' 
                    ?
                    <p className="capitalize">Handle Length: {this.props.state.bullwhip.designABullwhipReducer.handleLength.name} Inches</p> 
                    :
                    <p>Please Choose Your Whip's Handle Length</p>
                    }
                    {this.props.state.bullwhip.designABullwhipReducer.concho.name !== '' 
                    ?
                    <div className={this.createConchoBackgroundClass(this.props.state.bullwhip.designABullwhipReducer.concho.name)}>
                        <p>
                            {this.props.state.bullwhip.designABullwhipReducer.concho.name}
                        </p>  
                    </div>                    :
                    <p>Please Choose Your Whip's Concho</p>
                    }

                    {
                    this.props.state.bullwhip.designABullwhipReducer.color1.name !== '' &&
                    this.props.state.bullwhip.designABullwhipReducer.color2.name !== '' &&
                    this.props.state.bullwhip.designABullwhipReducer.pattern.name !== '' &&
                    this.props.state.bullwhip.designABullwhipReducer.whipLength.name !== '' &&
                    this.props.state.bullwhip.designABullwhipReducer.handleLength.name !== '' &&
                    this.props.state.bullwhip.designABullwhipReducer.concho.name !== ''
                    ?
                    <div>
                        <p>Your Bullwhip's total is: ${this.props.state.bullwhip.designABullwhipReducer.total}</p>
                        <button onClick={this.addBullwhipToCart}>
                        Add Bullwhip to Cart
                        </button>
                    </div>
                    :
                    <span></span>
                    }
                    {this.props.state.bullwhip.cartReducer.length !== 0
                    &&
                    <button onClick={() => this.props.history.push("/checkout")}>
                        Proceed to Checkout
                    </button>
                    }
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

const whipWithRouter = withRouter(YourWhip)

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(whipWithRouter);