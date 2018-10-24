import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DesignABullwhip.css';

class WhipLengthChooser extends Component {

    state = {
        whipLength: '',
    }

    updateWhipLength = (event) => {
        this.setState({
            whipLength: event.target.value
        })
        this.props.dispatch({type: 'SET_WHIP_LENGTH', payload: event.target.value})

    }

    getWhipLengths = () => {
        this.props.dispatch({type: 'FETCH_WHIP_LENGTHS'})
    }

    componentDidMount() {
        this.getWhipLengths()
    }

    render() {
        return (
            <div >
                <h2>
                    Choose Your Whip Length        
                </h2>
                <div className="whipLengthButtonsContainer">
                    {this.props.state.bullwhip.whipLengthsReducer.map(length => {
                        return <button 
                        key={length.id} 
                        onClick={this.updateWhipLength}
                        value={length.length}
                        >                        
                        {length.length} Feet
                        </button>
                    })}
                </div>
                
                <p>Selected Whip Length: {this.state.whipLength}</p>
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
export default connect(mapStateToProps)(WhipLengthChooser);