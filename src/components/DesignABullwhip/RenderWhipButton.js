import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DesignABullwhip.css';

class RenderWhipButton extends Component {

    triggerRender = () => {
        this.props.dispatch({ type: 'RENDER_HANLE', payload: true });
    }

    render() {
        return (
            <div className="designContainer renderWhip">
                <h3>Render Your Whip</h3>
                {this.props.state.bullwhip.designABullwhipReducer.color1.name === '' ||
                this.props.state.bullwhip.designABullwhipReducer.color2.name === '' ||
                this.props.state.bullwhip.designABullwhipReducer.pattern.name === '' 
                ?
                <h3>Choose you Color1, Color2 and Handle Pattern to see your bullwhip!</h3>
                :
                <button onClick={this.triggerRender} className='renderButton'>Click here to see your Bullwhip Handle</button>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps)(RenderWhipButton);



