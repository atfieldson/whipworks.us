import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DesignABullwhip.css';

class HandleLengthChooser extends Component {

    state = {
        handleLength: '',
    }

    updateHandleLength = (event) => {
        this.setState({
            handleLength: event.target.name
        })
        this.props.dispatch({type: 'SET_WHIP_HANDLE_LENGTH', payload: { name: event.target.name, cost: event.target.value, id: event.target.id}})
        this.props.dispatch({type: 'SET_WHIP_TOTAL'})
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
                    Handle Length        
                </h2>
                <div className="buttonsContainer">
                    {this.props.state.bullwhip.handleLengthsReducer.map(length => {
                        return <div className="buttonDiv">
                        <button 
                        value={length.cost}
                        key={length.id} 
                        id={length.id}
                        onClick={this.updateHandleLength}
                        name={length.length}
                        >                        
                        {length.length} Inches
                        </button>
                        <p>${length.cost}</p>
                        </div>
                    })}
                </div>
                { this.props.state.bullwhip.designABullwhipReducer.handleLength.name === ''
                ?
                <p>Select you Handle's Length</p>
                :
                <p>Selected Handle Length: {this.props.state.bullwhip.designABullwhipReducer.handleLength.name} Inches</p>
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
export default connect(mapStateToProps)(HandleLengthChooser);