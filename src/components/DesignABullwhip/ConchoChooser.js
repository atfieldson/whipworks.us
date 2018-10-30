import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DesignABullwhip.css';
import './ConchoChooser.css';

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

    determineClasses = (name) => {
        let newClass = name.replace(/\s/g, '')

        return `capitalize conchoButton ${newClass}`
    }

    getConchos = () => {
        this.props.dispatch({type: 'FETCH_CONCHOS'})
    }

    componentDidMount() {
        this.getConchos()
    }

    render() {
        return (
            <div className="designContainer">
                <h2>
                    Concho
                </h2>
                <div className="buttonsContainer conchoContainer">
                    {this.props.state.bullwhip.conchosReducer.map(concho => {
                        return <div className = "buttonDiv" key={concho.id}>
                        <button 
                        className ={this.determineClasses(concho.name)}                       
                        id={concho.id}
                        value={concho.cost}
                        onClick={this.updateConcho}
                        name={concho.name}
                        >                        
                        </button>
                        <p className="capitalize">{concho.name}</p>
                        <p>${concho.cost}</p>
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
export default connect(mapStateToProps)(ConchoChooser);