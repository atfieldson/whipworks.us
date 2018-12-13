import React, { Component } from 'react';
import { connect } from 'react-redux';

class WaxChooser extends Component {

    updateWaxed = (event) => {
        this.setState({
            ...this.state,
            waxed: event.target.value
        })
        this.props.dispatch({ type: 'SET_WHIP_WAXED', payload: event.target.value })
        this.props.dispatch({ type: 'SET_WHIP_TOTAL' })
        //Wait 50 ms before executing triggerRender, a temporary fix until I can figure out
        //how to make this.props.dispatch return a promise so that I can trigger this.triggerRender
        //after redux state has been updated
        setTimeout(function(){
            this.triggerRender();
        }.bind(this), 50);    
    }

    triggerRender = () => {
        if (this.props.state.bullwhip.designABullwhipReducer.color1.name !== '' &&
            this.props.state.bullwhip.designABullwhipReducer.color2.name !== '' &&
            this.props.state.bullwhip.designABullwhipReducer.pattern.name !== '') {
            this.props.dispatch({ type: 'RENDER_HANDLE', payload: true });
        }
    }

    render() {
        return (
            <div className="designContainer">
                <h2>
                    Waxed Options
                </h2>
                <div className='tooltipwax'>
                <span className="tooltiptextwax">Your Bullwhip is submerged in liquid paraffin wax, filling the small air pockets in your whip making it much more water resistant.  It also gives a professional, matte aesthetic to your Bullwhip! (There is a small extra fee for waxing your whip)</span>
                <button value="yes" onClick={this.updateWaxed}
                className={this.props.state.bullwhip.designABullwhipReducer.waxed === 'yes'
                ?
                'colorChooserButtonHighlighted'
                :
                'colorChooserButton'
                }>
                    Waxed
                </button>
                </div>
                <div className='tooltipwax'>
                <span className="tooltiptextwax">Unwaxed whips are a little lighter than waxed whips. If you are looking for something as fast as possible, this may be the way to go.  You do need to worry more about your whip getting wet though. </span>
                <button value="no" onClick={this.updateWaxed}
                className={this.props.state.bullwhip.designABullwhipReducer.waxed === 'no'
                ?
                'colorChooserButtonHighlighted'
                :
                'colorChooserButton'}>
                    Unwaxed
                </button>
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
export default connect(mapStateToProps)(WaxChooser);