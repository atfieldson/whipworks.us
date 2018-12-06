import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            return undefined
        }
    }

    getHandleLengths = () => {
        this.props.dispatch({type: 'FETCH_HANDLE_LENGTHS'})
    }

    determineHandleLengthText = (length) => {
        if (length === 8 ){
            return `Indiana Jones' bullwhip (made by the famous whip maker David Morgan) has an 8 inch handle.  It has a great look and feel, but you don't get as much accuracy for target work.` 
        } else if (length === 10) {
            return `This is my most popular handle length.  10 inches is short enough to be easy to handle, and long enough to give you some good accuracy.  The perfect handle length for beginners!`
        } else if ( length === 12 ) {
            return `If you want to do target work, I think a 12 inch handle is great.  My personal pair of whips for 2 handed routines have 12 inch handles because of the added control they offer.`
        } else if ( length === 14 ) {
            return `These handles are very long and heavy.  If you want to do a lot of target work, you may enjoy the added control a 14 inch handle can offer.`
        } else {
            return 'WhipWorks'
        }
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
                        <div className="tooltiplength">
                        <span className="tooltiptextlength">{this.determineHandleLengthText(length.length)}</span>
                        <button 
                        className="lengthButton"
                        value={length.cost}
                        id={length.id}
                        onClick={this.updateHandleLength}
                        name={length.length}
                        > 
                        {length.length} Inches
                        </button>
                        </div>                       
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