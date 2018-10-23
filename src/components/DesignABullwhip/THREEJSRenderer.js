import React, { Component } from 'react';
import { connect } from 'react-redux';
import THREE from 'three';
import OrbitControls from 'three-orbit-controls';
import CanvasRenderer from './CanvasRenderer'

import './DesignABullwhip.css';

class THREEJSRenderer extends Component {
    

render() {
    return (
        <div>
            <CanvasRenderer />
        </div>
    )
}
}

const mapStateToProps = state => ({
    state,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(THREEJSRenderer);