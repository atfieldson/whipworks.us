import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DesignABullwhip.css';

class WhipLengthChooser extends Component {

    state = {
        whipLength: '',
    }

    updateWhipLength = (event) => {
        this.setState({
            whipLength: event.target.name
        })
        this.props.dispatch({type: 'SET_WHIP_LENGTH', payload: { name: event.target.name, cost: event.target.value, waxed_cost: event.target.title, id: event.target.id }})
        this.props.dispatch({type: 'SET_WHIP_TOTAL'})
    }

    getWhipLengths = () => {
        this.props.dispatch({type: 'FETCH_WHIP_LENGTHS'})
    }

    componentDidMount() {
        this.getWhipLengths()
    }

    render() {
        return (
            <div className="designContainer">
                <h2>
                    Whip Length         
                </h2>
                <div className="buttonsContainer">
                    {this.props.state.bullwhip.whipLengthsReducer.map(length => {
                        return <div className="buttonDiv" key={length.id}>
                        <button 
                        value={length.cost} 
                        id={length.id}
                        onClick={this.updateWhipLength}
                        name={length.length}
                        title={length.waxed_cost}
                        >                        
                        {length.length} Feet
                        </button>
                        <p>${length.cost}</p>
                        <p>${length.waxed_cost}*</p>
                        </div>
                    })}
                </div>
                <p>( * Additional Cost for Waxed Whip, different per length )</p>
                { this.props.state.bullwhip.designABullwhipReducer.whipLength.name === ''
                ?
                <p>Select you Whip's Length</p>
                :
                <p>Selected Whip Length: {this.props.state.bullwhip.designABullwhipReducer.whipLength.name} Feet</p>
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
export default connect(mapStateToProps)(WhipLengthChooser);