import React, { Component } from 'react';
import { connect } from 'react-redux';
import CanvasRenderer from './CanvasRenderer';
import ColorChooser from './ColorChooser';
import HandleChooser from './HandleChooser';
import THREEJSRenderer from './THREEJSRenderer';

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
            <THREEJSRenderer />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(DesignABullwhip);