import React, { Component } from 'react';
import { connect } from 'react-redux';
import WaxChooser from './WaxChooser';
import ColorChooser from './ColorChooser';
import HandleChooser from './HandleChooser';
import CanvasRenderer from './CanvasRenderer';
import WhipLengthChooser from './WhipLengthChooser';
import HandleLengthChooser from './HandleLengthChooser';
import ConchoChooser from './ConchoChooser';
import YourWhip from './YourWhip';
import { StickyContainer, Sticky } from 'react-sticky';
import ReactGA from 'react-ga';


class DesignABullwhip extends Component {

  componentDidMount() {
      window.scrollTo(0, 0);
      ReactGA.pageview('Design a Bullwhip');

  }
  
  render() {
    return (
      <StickyContainer>
      <div className="designHeader">
          <h1>Design A Bullwhip</h1>
        </div>
        <div className="designYourBullwhipContainer">
        <div className="yourWhipContainer">
            <YourWhip />
        </div>
        <div className="rowToColumnDesign">
          <div className="waxedColorPatternColumn">
            <ColorChooser />
            <HandleChooser />
            <WaxChooser />
            <WhipLengthChooser />
            <HandleLengthChooser />
            <ConchoChooser />
          </div>
          <CanvasRenderer />
          </div>
        </div>



        {/* <div className="purchaseWhipContainer">
          <div className="lengthConchoContainer">
            <WhipLengthChooser />
            <HandleLengthChooser />
            <ConchoChooser />
          </div>
        </div> */}
        {/* <p>{JSON.stringify(this.props.state.bullwhip.designABullwhipReducer)}</p> */}
        </StickyContainer>

    )
  }
}

const mapStateToProps = state => ({
  state,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(DesignABullwhip);