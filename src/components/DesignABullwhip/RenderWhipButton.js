import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DesignABullwhip.css';

class RenderWhipButton extends Component {

    triggerRender = () => {
        this.props.dispatch({ type: 'RENDER_HANLE', payload: true });
    }

    render() {
        return (
            <div className="renderButtonContainer">
                {this.props.state.bullwhip.designABullwhipReducer.color1.name === '' ||
                    this.props.state.bullwhip.designABullwhipReducer.color2.name === '' ||
                    this.props.state.bullwhip.designABullwhipReducer.pattern.name === ''
                    ?
                    <div className='tooltipRender'>
                        <span className="inactiveRenderButtonToolTip">Choose you Color1, Color2 and Handle Pattern to see your bullwhip</span>
                        <button onClick={this.triggerRender} className='inactiveRenderButton'>Click here to see your Bullwhip Handle</button>
                    </div>
                    // <h3></h3>
                    :
                    <div className="tooltipRender">
                        <button onClick={this.triggerRender} className='renderButton'>Click here to see your Bullwhip Handle</button>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps)(RenderWhipButton);



