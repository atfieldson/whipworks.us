import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DesignABullwhip.css';
import './WhipAndHandleLengthChooser.css';

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

    determineHighlight = (length) => {
        if (length === parseInt(this.props.state.bullwhip.designABullwhipReducer.handleLength.name)){
                return 'highlighted'
        } else {
            return false
        }
    }

    getHandleLengths = () => {
        this.props.dispatch({type: 'FETCH_HANDLE_LENGTHS'})
    }

    componentDidMount() {
        this.getHandleLengths()
    }

    render() {
        return (
            <div className="designContainer">
                <h2>
                    Handle Length        
                </h2>
                <div className="buttonsContainer">
                    {this.props.state.bullwhip.handleLengthsReducer.map(length => {
                        return <div className="buttonDiv" key={length.id}>
                        <button 
                        className="lengthButton"
                        value={length.cost}
                        id={length.id}
                        onClick={this.updateHandleLength}
                        name={length.length}
                        >                        
                        {length.length} Inches
                        </button>
                        <p className={this.determineHighlight(length.length)}>${length.cost}</p>
                        </div>
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
export default connect(mapStateToProps)(HandleLengthChooser);