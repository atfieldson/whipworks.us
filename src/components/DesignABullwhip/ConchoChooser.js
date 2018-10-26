import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DesignABullwhip.css';

class ConchoChooser extends Component {

    state = {
        concho: '',
    }

    updateConcho = (event) => {
        this.setState({
            ...this.state,
            concho: event.target.name,
        })
        this.props.dispatch({type: 'SET_WHIP_CONCHO', payload: { name: event.target.name, cost: event.target.value, id: event.target.id}})
        this.props.dispatch({type: 'SET_WHIP_TOTAL'})
    }

    getConchos = () => {
        this.props.dispatch({type: 'FETCH_CONCHOS'})
    }

    componentDidMount() {
        this.getConchos()
    }

    render() {
        return (
            <div >
                <h2>
                    Concho or Pommel
                </h2>
                <div className="buttonsContainer">
                    {this.props.state.bullwhip.conchosReducer.map(concho => {
                        return <div className = "buttonDiv">
                        <button 
                        className = "capitalize"
                        key={concho.id} 
                        id={concho.id}
                        value={concho.cost}
                        onClick={this.updateConcho}
                        name={concho.name}
                        >                        
                        {concho.name}
                        </button>
                        <p>${concho.cost}</p>
                        </div>
                    })}
                </div>
                { this.props.state.bullwhip.designABullwhipReducer.concho.name === ''
                ?
                <p>Select you Whip's Concho</p>
                :
                <p className="capitalize">Selected Concho: {this.props.state.bullwhip.designABullwhipReducer.concho.name}</p>
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
export default connect(mapStateToProps)(ConchoChooser);