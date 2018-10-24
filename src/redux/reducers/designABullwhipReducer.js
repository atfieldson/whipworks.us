import { combineReducers } from 'redux';

const designABullwhipReducer = (state = {color1: '', color2: '', pattern: '', whipLength: '', handleLength: ''}, action) => {
    switch (action.type) {
      case 'SET_COLOR1':
        return {
            ...state,
            color1: action.payload,
        };
      case 'SET_COLOR2':
        return {
            ...state,
            color2: action.payload,
        };
      case 'SET_HANDLE_PATTERN':
        return {
            ...state,
            pattern: action.payload,
        };
      case 'SET_WHIP_LENGTH':
        return {
          ...state,
          whipLength: action.payload,
        }
      case 'SET_HANDLE_LENGTH':
        return {
          ...state,
          handleLength: action.payload,
        }
      default:
        return state;
    }
  };

  const colorsReducer = (state = [], action) => {
      console.log('in SET_COLORS')
      switch (action.type) {
          case 'SET_COLORS':
            return action.payload;
          default: 
            return state 
          } 
    }

  const handlesReducer = (state = [], action) => {
    console.log('in SET_HANDLES')
    switch (action.type) {
        case 'SET_HANDLES':
          return action.payload;
        default: 
          return state 
        } 
  }

  const whipLengthsReducer = (state = [], action ) => {
    console.log('in SET_WHIP_LENGTHS');
    switch (action.type) {
      case 'SET_WHIP_LENGTHS':
        return action.payload;
      default:
        return state
    }
  }

  const handleLengthsReducer = (state = [], action ) => {
    console.log('in SET_HANDLE_LENGTHS');
    switch (action.type) {
      case 'SET_HANDLE_LENGTHS':
        return action.payload;
      default:
        return state
    }
  }
  
  export default combineReducers({
    designABullwhipReducer,
    colorsReducer,
    handlesReducer,
    whipLengthsReducer,
    handleLengthsReducer,
  })