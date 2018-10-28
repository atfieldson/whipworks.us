import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DesignABullwhip.css';

class HandleChooser extends Component {

    state = {
        handle: ''
    }

    updateHandle = (event) => {
        this.setState({
            ...this.state,
            handle: event.target.value,
        })
        this.props.dispatch({type: 'SET_WHIP_HANDLE_PATTERN', payload: {name: event.target.value, id: event.target.id}})
    }

    getHandles = () => {
        this.props.dispatch({type: 'FETCH_HANDLES'})
    }

    componentDidMount() {
        this.getHandles()
    }

    render() {
        return (
            <div className="handleContainer designContainer">
                <h2>
                    Handle Pattern        
                </h2>
                <div className="handleButtonsContainer">
                    {this.props.state.bullwhip.handlesReducer.map(handle => {
                        return <button
                        className = "capitalize" 
                        key={handle.id}
                        id={handle.id} 
                        onClick={this.updateHandle}
                        value={handle.handle_design}
                        >                        
                        {handle.handle_design}
                        </button>
                    })}
                </div>
                { this.props.state.bullwhip.designABullwhipReducer.pattern.name === ''
                ?
                <p>Select you Whip's Handle Pattern</p>
                :
                <p className = "capitalize">Selected Handle Pattern: {this.props.state.bullwhip.designABullwhipReducer.pattern.name}</p>
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

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(HandleChooser);