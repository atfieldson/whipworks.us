import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class YourWhip extends Component {

    state = {
        bullwhipAddedModal: false,
    }

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
        this.openBullwhipAddedModal();
    }

    //Bullwhip added to cart modal
    openBullwhipAddedModal = () => {
        this.setState({
            bullwhipAddedModal: true,
        })
        window.addEventListener('click', this.exitBullwhipAddedModal, true);
        console.log('error modal:', this.state.bullwhipAddedModal);
    }

    exitBullwhipAddedModal = (event) => {
        if (event.target.classList.contains('addedBullwhipModal')) {
            this.triggerBullwhipAddedExit();
        }
    }

    triggerBullwhipAddedExit = () => {
        this.setState({
            bullwhipAddedModal: false,
        })
        window.removeEventListener('click', this.exitBullwhipAddedModal, true)
        console.log("in exit bullwhip modal", this.state);
    }
    //end Error Modal


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
                    <h4>Waxed Option:</h4>
                    {this.props.state.bullwhip.designABullwhipReducer.waxed === 'yes'
                        ?
                        <h3 className="waxedSelection">Waxed</h3>
                        :
                        <h3 className="waxedSelection">Unwaxed</h3>
                    }
                    <h4>Handle Pattern:</h4>
                    {this.props.state.bullwhip.designABullwhipReducer.pattern.name !== ''
                        ?
                        <div className="yourWhipPlaceholder">
                        <div className={this.createHandleBackgroundClass(this.props.state.bullwhip.designABullwhipReducer.pattern.name)}>
                            <p>
                                {this.props.state.bullwhip.designABullwhipReducer.pattern.name}
                            </p>
                        </div>
                        </div>
                        :
                        <div className="yourWhipPlaceholder">
                        <p>Please Choose Your Whip's Handle Pattern</p>
                        </div>
                    }
                    {this.props.state.bullwhip.designABullwhipReducer.whipLength.name !== ''
                        ?
                        <div className="yourWhipPlaceholderSmall">
                        <h4 className="capitalize">Whip Length: </h4>
                        <h4>{this.props.state.bullwhip.designABullwhipReducer.whipLength.name} Feet</h4>
                        </div>
                        :
                        <div className="yourWhipPlaceholderSmall">
                        <h4>Whip Length: </h4>
                        <p>Please Choose Your Whip's Length</p>
                        </div>
                    }
                    {this.props.state.bullwhip.designABullwhipReducer.handleLength.name !== ''
                        ?
                        <div className="yourWhipPlaceholderSmall">
                        <h4>Handle Length: </h4>
                        <h4>{this.props.state.bullwhip.designABullwhipReducer.handleLength.name} Inches</h4>
                        </div>
                        :
                        <div className="yourWhipPlaceholderSmall">
                        <h4>Handle Length: </h4>
                        <p>Please Choose Your Whip's Handle Length</p>
                        </div>
                    }
                    {this.props.state.bullwhip.designABullwhipReducer.concho.name !== ''
                        ?
                        <div className="yourWhipPlaceholderBig">
                            <h4>Concho: </h4>
                            <div className={this.createConchoBackgroundClass(this.props.state.bullwhip.designABullwhipReducer.concho.name)}>
                                <p>
                                    {this.props.state.bullwhip.designABullwhipReducer.concho.name}
                                </p>
                            </div>
                        </div>
                        :
                        <div className="yourWhipPlaceholderBig">
                            <h4>Concho: </h4>
                            <p>Please Choose Your Whip's Concho</p>
                        </div>
                    }

                    {
                        this.props.state.bullwhip.designABullwhipReducer.color1.name !== '' &&
                            this.props.state.bullwhip.designABullwhipReducer.color2.name !== '' &&
                            this.props.state.bullwhip.designABullwhipReducer.pattern.name !== '' &&
                            this.props.state.bullwhip.designABullwhipReducer.whipLength.name !== '' &&
                            this.props.state.bullwhip.designABullwhipReducer.handleLength.name !== '' &&
                            this.props.state.bullwhip.designABullwhipReducer.concho.name !== ''
                            ?
                            <div >
                                <div className="yourWhipPlaceholderXSmall">
                                <p>Your Bullwhip's total is: ${this.props.state.bullwhip.designABullwhipReducer.total}</p>
                                </div>
                                <button onClick={this.addBullwhipToCart} className="yourWhipButtons">
                                    Add Bullwhip to Cart
                                </button>
                            </div>
                            :
                            <div className="tooltipAddToCart">
                                <div className="yourWhipPlaceholderXSmall">
                                </div>
                                <span className="tooltiptextAddToCart">Select all the above options to add this Bullwhip to your cart</span>
                                <button onClick={this.addBullwhipToCart} className="yourWhipButtonsInactive">
                                    Add Bullwhip to Cart
                                </button>
                            </div>
                    }
                    {this.props.state.bullwhip.cartReducer.length !== 0
                        &&
                        <button onClick={() => this.props.history.push("/checkout")} className="yourWhipButtons">
                            Proceed to Checkout
                    </button>
                    }
                </div>
                {
          this.state.bullwhipAddedModal
            ?
            <div className="addedBullwhipModal">
              <div className="addedBullwhipModalContent">
                <div className="addedBullwhipModalContainer">
                  <img src={require('../DesignABullwhip/images/backgrounds/ww.jpg')} alt='WhipWorks' className='modalLogo' />
                  <h3>Your Bullwhip has been added to your Cart</h3>
                  <button onClick={() => this.props.history.push("/checkout")} className="modalButton">
                            Proceed to Checkout
                    </button>
                  <button onClick={this.triggerBullwhipAddedExit} className="modalButton">Design More Bullwhips</button>
                </div>
              </div>
            </div>
            :
            undefined
        }
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