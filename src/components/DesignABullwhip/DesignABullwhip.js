import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorChooser from './ColorChooser';
import HandleChooser from './HandleChooser';
import CanvasRenderer from './CanvasRenderer';
import WhipLengthChooser from './WhipLengthChooser';
import HandleLengthChooser from './HandleLengthChooser';
import ConchoChooser from './ConchoChooser';
import YourWhip from './YourWhip';


import './DesignABullwhip.css';

class DesignABullwhip extends Component {
  render() {
    return (
      <div>
        <div className="designHeader">
          <h1>Design A Bullwhip</h1>
        </div>
        <div className="colorContainer designContainer">
          <ColorChooser />
        </div>
        <div className="handleAndRendering">
          <div className="handleContainer designContainer">
          <HandleChooser />
          </div>
          <div className="rendering designContainer">
            <CanvasRenderer />
          </div>
        </div>
        <div className="designContainer">
          <WhipLengthChooser />
        </div>
        <div className="designContainer">
          <HandleLengthChooser />
        </div>
        <div className="designContainer">
          <ConchoChooser />
        </div>
        <div className="designContainer">
          <YourWhip />
        </div>
        <p>{JSON.stringify(this.props.state.bullwhip.designABullwhipReducer)}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(DesignABullwhip);