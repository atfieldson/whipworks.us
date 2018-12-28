import React, { Component } from 'react';
import { connect } from 'react-redux';

class WhipLengthChooser extends Component {

    state = {
        whipLength: '',
    }

    updateWhipLength = (event) => {
        this.setState({
            whipLength: event.target.name
        })
        this.props.dispatch({type: 'SET_WHIP_LENGTH', payload: { name: event.target.name, cost: event.target.value, waxed_cost: event.target.title, id: event.target.id, shipping_profile_id: event.target.dataset.shipping }})
        this.props.dispatch({type: 'SET_WHIP_TOTAL'})
    }

    getWhipLengths = () => {
        this.props.dispatch({type: 'FETCH_WHIP_LENGTHS'})
    }

    determineHighlight = (waxed, length) => {
        if (waxed === this.props.state.bullwhip.designABullwhipReducer.waxed &&
            length === parseInt(this.props.state.bullwhip.designABullwhipReducer.whipLength.name)) {
                return 'highlighted'
        } else {
            return undefined
        }
    }

    determineWhipLengthText = (length) => {
        if (length === 4 ){
            return 'These short whips are incredibly fast!  They require more finesse to crack than longer whips though, making them not great options for beginners.'
        } else if (length === 5) {
            return 'The shortest whip I would recommend to a beginner.  Fast and lightweight, these whips are fun!  I recommend 5 footers for 2 handed cracking routines.'
        } else if ( length === 6 ) {
            return '6 footers are the bread and butter of bullwhips in my opinion.  They are a great length to learn how to crack with and are long enough to be enjoyable for target work.  6 footers are also great for 2 handed cracking routines.'
        } else if ( length === 7 ) {
            return '7 feet long is where whips begin to get more heavy duty.  You can really get a good pop out of this length! They are great for beginners as well.  Target work with 7 footers is really fun.'
        } else if ( length === 8 ) {
            return 'The 8 footer is an iconic length to me.  They are big and loud, and target work with 8 footers is awesome!  This is the longest whip I would recommend to a beginner. '
        } else if ( length === 10 ) {
            return `You'd be surprised how long 10 feet actually is.  It's long length makes it extremely loud but more difficult to handle.  If you could snuff out a candle with a 10 footer, I'd be incredibly impressed.` 
        } else if ( length === 12 ) {
            return `And here it is, the longest whip I carry!  12 footers are truly beasts.  Incredibly long but very hard to handle.  Cracking sessions with these whips may be short lived because of fore arm fatigue, but they are a blast!`
        }
        else {
            return 'WhipWorks'
        }
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
                        <div className="tooltiplength">
                        <span className="tooltiptextlength">{this.determineWhipLengthText(length.length)}</span>
                        <button 
                        className = "lengthButton"
                        value={length.cost} 
                        id={length.id}
                        onClick={this.updateWhipLength}
                        name={length.length}
                        title={length.waxed_cost}
                        data-shipping={length.shipping_profile_id}
                        >                        
                        {length.length} Feet
                        </button>
                        </div>
                        <p className={this.determineHighlight('no', length.length)}>${length.cost}</p>
                        <p className={this.determineHighlight('yes', length.length)}>${length.waxed_cost + length.cost}*</p>
                        </div>
                    })}
                </div>
                <p>* Additional Cost for Waxed Whip, different per length</p>
                
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