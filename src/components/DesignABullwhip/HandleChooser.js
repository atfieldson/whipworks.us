import React, { Component } from 'react';
import { connect } from 'react-redux';

class HandleChooser extends Component {

    state = {
        handle: ''
    }


    triggerRender = () => {
        if (this.props.state.bullwhip.designABullwhipReducer.color1.name !== '' &&
            this.props.state.bullwhip.designABullwhipReducer.color2.name !== '' &&
            this.props.state.bullwhip.designABullwhipReducer.pattern.name !== '') {
            this.props.dispatch({ type: 'RENDER_HANDLE', payload: true });
        }
    }

    updateHandle = (event) => {
        this.setState({
            ...this.state,
            handle: event.target.value,
        })
        this.props.dispatch({type: 'SET_WHIP_HANDLE_PATTERN', payload: {name: event.target.value, id: event.target.id}})
        //Wait 50 ms before executing triggerRender, a temporary fix until I can figure out
        //how to make this.props.dispatch return a promise so that I can trigger this.triggerRender
        //after redux state has been updated
        setTimeout(function(){
            this.triggerRender();
        }.bind(this), 50);
    }

    getHandleClasses = (handle) => {
        //takes in a name of a color and returns a string without spaces, the class
                let name = handle.replace(/\s/g, '')
        
                return `handleButton capitalize ${name}`
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
                        className = {this.getHandleClasses(handle.handle_design)} 
                        key={handle.id}
                        id={handle.id} 
                        onClick={this.updateHandle}
                        value={handle.handle_design}
                        >                        
                        {handle.handle_design}
                        </button>
                    })}
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
export default connect(mapStateToProps)(HandleChooser);