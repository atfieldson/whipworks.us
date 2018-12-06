import React, { Component } from 'react';
import { connect } from 'react-redux';

class ColorChooser extends Component {

    state = {
        colorChooser: "1",
        waxed: 'yes',
    }

    getSpool = (color) => {
//takes in a name of a color and returns a string without spaces, the class
        let name = color.replace(/\s/g, '')

        // return `colorButton capitalize ${name}`

        if (color === 'white' || color === 'turquoise' || color === 'silver' || color === 'yellow'){
            return `colorButtonWhite capitalize ${name}`
        } else{
            return `colorButton capitalize ${name}`
        } 
    }

    setColorChooser = (event) => {
        this.setState({
            ...this.state,
            colorChooser: event.target.value,
        })
    }

    updateColor1 = (event) => {
        this.setState({
            ...this.state,
            color1: event.target.name,
        })
        this.props.dispatch({ 
            type: 'SET_WHIP_COLOR1', 
            payload: { 
                name: event.target.name, 
                url: event.target.value, 
                unwaxedurl: event.target.title, 
                id: event.target.id, 
                // dataset allows you to create custom data attributes, look at data-spool={color.img_spool} in jsx
                spool_url: event.target.dataset.spool} })
    }

    updateColor2 = (event) => {
        this.setState({
            ...this.state,
            color2: event.target.name,
        })
        this.props.dispatch({ 
            type: 'SET_WHIP_COLOR2', 
            payload: { 
                name: event.target.name, 
                url: event.target.value, 
                unwaxedurl: event.target.title, 
                id: event.target.id,
                spool_url: event.target.dataset.spool,
            } })
    }

    getColors = () => {
        this.props.dispatch({ type: 'FETCH_COLORS' })
    }

    componentDidMount() {
        this.getColors()
    }

    render() {

        return (
            <div className="colorContainer designContainer">
                <h2>
                    Choose Your Colors
                </h2>
                <div className="colorButtonsContainer">
                    {this.props.state.bullwhip.colorsReducer.map(color => {
                        return <button
                            className={this.getSpool(color.color)}
                            key={color.id}
                            id={color.id}
                            name={color.color}
                            data-spool={color.img_spool}
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
                    <div className="colorChooserContainer">
                        <div className='tooltipwax'>
                            <span className="tooltiptextwax">Currently Selecting: <h3>Color {this.state.colorChooser}</h3></span>
                            <button value="1" 
                            onClick={this.setColorChooser} 
                            className={this.state.colorChooser === "1" 
                            ?
                            "colorChooserButtonHighlighted"
                            :
                            "colorChooserButton"
                            }
                            >
                            Color 1
                            </button>
                        </div>
                        <div className='tooltipwax'>
                            <span className="tooltiptextwax">Currently Selecting: <h3>Color {this.state.colorChooser}</h3></span>
                            <button value="2" 
                            onClick={this.setColorChooser} 
                            className={this.state.colorChooser === "2" 
                            ?
                            "colorChooserButtonHighlighted"
                            :
                            "colorChooserButton"
                            }
                            >
                            Color 2
                            </button>
                        </div>
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
export default connect(mapStateToProps)(ColorChooser);