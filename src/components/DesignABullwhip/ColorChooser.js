import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DesignABullwhip.css';

class ColorChooser extends Component {

    state = {
        colorChooser: "1",
        waxed: 'yes',
    }

    setWaxed = () => {
    
    //set waxed status in redux

    //reset color1.url and color2.url and in designABullwhipReducer to reflect waxed or unwaxed
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
        this.props.dispatch({ type: 'SET_WHIP_COLOR1', payload: { name: event.target.name, url: event.target.value, unwaxedurl: event.target.title, id: event.target.id} })
    }

    updateColor2 = (event) => {
        this.setState({
            ...this.state,
            color2: event.target.name,
        })
        this.props.dispatch({ type: 'SET_WHIP_COLOR2', payload: { name: event.target.name, url: event.target.value, unwaxedurl: event.target.title, id: event.target.id} })
    }

    updateWaxed = (event) => {
        this.setState({
            ...this.state,
            waxed: event.target.value
        })
        this.props.dispatch({ type: 'SET_WHIP_WAXED', payload: event.target.value })
        this.props.dispatch({ type: 'SET_WHIP_TOTAL'})
    }



    getColors = () => {
        this.props.dispatch({ type: 'FETCH_COLORS' })
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
                            className="capitalize"
                            key={color.id}
                            id={color.id}
                            name={color.color}
                            onClick=
                            {this.state.colorChooser === "1"
                                ? this.updateColor1
                                : this.updateColor2}
                            value=
                            {this.state.colorChooser === "1"
                                ? color.img_right_waxed
                                : color.img_left_waxed
                            }
                            title=
                            {this.state.colorChooser === "1"
                                ? color.img_right
                                : color.img_left
                            }
                            >
                            {color.color}
                        </button>
                    })}
                </div>
                <h3>Currently Selecting: Color {this.state.colorChooser}</h3>
                <button value="1" onClick={this.setColorChooser}>Color 1</button>
                <button value="2" onClick={this.setColorChooser}>Color 2</button>
                {this.props.state.bullwhip.designABullwhipReducer.waxed === 'yes' 
                ?
                <h3>Waxed</h3> 
                :
                <h3>Unwaxed</h3>}
                <button value="yes" onClick={this.updateWaxed}>Waxed</button>
                <button value="no" onClick={this.updateWaxed}>Unwaxed</button>
                { this.props.state.bullwhip.designABullwhipReducer.color1.name === ''
                ?
                <p>Select you Color 1</p>
                :
                <p className = "capitalize">Color 1: {this.props.state.bullwhip.designABullwhipReducer.color1.name}</p>
                }
                { this.props.state.bullwhip.designABullwhipReducer.color2.name === ''
                ?
                <p>Select you Color 2</p>
                :
                <p className = "capitalize">Color 2: {this.props.state.bullwhip.designABullwhipReducer.color2.name}</p>
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
export default connect(mapStateToProps)(ColorChooser);