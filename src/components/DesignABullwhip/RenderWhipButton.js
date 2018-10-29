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
                <button onClick={this.triggerRender}>Render Handle</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps)(RenderWhipButton);



