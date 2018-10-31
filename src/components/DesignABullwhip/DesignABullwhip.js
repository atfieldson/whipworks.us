import React, { Component } from 'react';
import { connect } from 'react-redux';
import WaxChooser from './WaxChooser';
import ColorChooser from './ColorChooser';
import WhipHandleDetails from './WhipHandleDetails';
import RenderWhipButton from './RenderWhipButton';
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
        <div className="designYourBullwhipContainer">
          <div className="waxedColorPatternColumn">
            <ColorChooser />
            <WaxChooser />
            <HandleChooser />
          </div>
          <div className="detailsRenderColumn">
            <WhipHandleDetails />
            <RenderWhipButton />
            
          </div>
          <CanvasRenderer />
        </div>


        <div className="purchaseWhipContainer">
          <div className="lengthConchoContainer">
            <WhipLengthChooser />
            <HandleLengthChooser />
            <ConchoChooser />
          </div>
          <div className="yourWhipContainer">
            <YourWhip />
          </div>
        </div>
        {/* <p>{JSON.stringify(this.props.state.bullwhip.designABullwhipReducer)}</p> */}
      </div >
    )
  }
}

const mapStateToProps = state => ({
  state,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(DesignABullwhip);