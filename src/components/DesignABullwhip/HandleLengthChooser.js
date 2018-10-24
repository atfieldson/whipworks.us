import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DesignABullwhip.css';

class HandleLengthChooser extends Component {

    state = {
        handleLength: '',
    }

    updateHandleLength = (event) => {
        this.setState({
            handleLength: event.target.value
        })
        this.props.dispatch({type: 'SET_HANDLE_LENGTH', payload: event.target.value})
    }

    getHandleLengths = () => {
        this.props.dispatch({type: 'FETCH_HANDLE_LENGTHS'})
    }

    componentDidMount() {
        this.getHandleLengths()
    }

    render() {
        return (
            <div >
                <h2>
                    Choose Your Handle Length        
                </h2>
                <div className="whipLengthButtonsContainer">
                    {this.props.state.bullwhip.handleLengthsReducer.map(length => {
                        return <button 
                        key={length.id} 
                        onClick={this.updateHandleLength}
                        value={length.length}
                        >                        
                        {length.length} Inches
                        </button>
                    })}
                </div>
                
                <p>Selected Handle Length: {this.state.handleLength}</p>
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
export default connect(mapStateToProps)(HandleLengthChooser);