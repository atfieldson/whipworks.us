import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DesignABullwhip.css';

class ColorChooser extends Component {

    state = {
        colorChooser: "1",
        color1: '',
        color2: '',
    }

    setColorChooser = (event) => {
        this.setState({
            ...this.state,
            colorChooser: event.target.value,
        })
        console.log('color chooser:', this.state.colorChooser)
    }

    updateColor1 = (event) => {
        this.setState({
            ...this.state,
            color1: event.target.name,
        })
        this.props.dispatch({type: 'SET_WHIP_COLOR1', payload: { name: event.target.name, url: event.target.value }})
    }

    updateColor2 = (event) => {
        this.setState({
            ...this.state,
            color2: event.target.name,
        })
        this.props.dispatch({type: 'SET_WHIP_COLOR2', payload: { name: event.target.name, url: event.target.value }})
    }



    getColors = () => {
        this.props.dispatch({type: 'FETCH_COLORS'})
    }

    componentDidMount() {
        this.getColors()
    }

    render() {
        return (
            <div >
                <h2>
                    Choose Your Color        
                </h2>
                <div className="colorButtonsContainer">
                    {this.props.state.bullwhip.colorsReducer.map(color => {
                        return <button 
                        className = "capitalize"
                        key={color.id} 
                        name={color.color}
                        onClick=
                        {this.state.colorChooser === "1" 
                        ? this.updateColor1
                        : this.updateColor2}
                        value=
                        {this.state.colorChooser === "1"
                        ? color.img_right_waxed
                        : color.img_left_waxed
                        }>                        
                        {color.color}
                        </button>
                    })}
                </div>
                <button value="1" onClick={this.setColorChooser}>Color 1</button>
                <button value="2" onClick={this.setColorChooser}>Color 2</button>
                <p>Currently Selecting Color: {this.state.colorChooser}</p>
                <p className = "capitalize">Color 1: {this.state.color1}</p>
                <p className = "capitalize">Color 2: {this.state.color2}</p>
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
export default connect(mapStateToProps)(ColorChooser);