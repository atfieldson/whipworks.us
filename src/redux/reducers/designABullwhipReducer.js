import { combineReducers } from 'redux';

const designABullwhipReducer = (state = {
  color1: {name: '', url: '', unwaxedurl: '', id: '', spool_url: ''}, 
  color2: {name: '', url: '', unwaxedurl: '', id: '', spool_url: ''},
  waxed: 'yes', 
  pattern: {name:'', id: ''}, 
  whipLength: {name: '', cost: '0', waxed_cost: '0', id: ''}, 
  handleLength: {name: '', cost: '0', id: ''}, 
  concho: {name: '', cost: '0', id: ''}, 
  total: 0,
},
  action) => {
    switch (action.type) {
      case 'SET_WHIP_COLOR1':
        return {
            ...state,
            color1: action.payload,
        };
      case 'SET_WHIP_COLOR2':
        return {
            ...state,
            color2: action.payload,
        };
      case 'SET_WHIP_WAXED':
        return {
          ...state,
          waxed: action.payload
        }
      case 'SET_WHIP_HANDLE_PATTERN':
        return {
            ...state,
            pattern: action.payload,
        };
      case 'SET_WHIP_LENGTH':
        return {
          ...state,
          whipLength: action.payload,
        }
      case 'SET_WHIP_HANDLE_LENGTH':
        return {
          ...state,
          handleLength: action.payload,
        }
      case 'SET_BULLWHIP':
        return action.payload;
      case 'SET_WHIP_CONCHO':
        return {
          ...state,
          concho: action.payload,
        }
      case 'SET_WHIP_TOTAL':
        let total = 0
        total += parseInt(state.whipLength.cost);
        total += parseInt(state.handleLength.cost);
        total += parseInt(state.concho.cost);
        if (state.waxed === 'yes') {
        total += parseInt(state.whipLength.waxed_cost);
        }
        return {
          ...state,
          total: total,
        }
      default:
        return state;
    }
  };

  const cartReducer = (state = [], action ) => {
    switch (action.type) {
      case 'ADD_BULLWHIP_TO_CART':
        return [
          ...state,
          {type: 'bullwhip',
          item: action.payload,
          }];
      case 'DELETE_ITEM_FROM_CART':
          let newArray = state.slice(0);
          newArray.splice(action.payload, 1)
          return newArray;
      default: 
        return state;
    }
  }

  const orderTotalReducer = (state = 0, action) => {
    switch (action.type) {
      case 'SET_ORDER_TOTAL':
        return action.payload;
    default:
      return state;
    };
  }

  const colorsReducer = (state = [], action) => {
      switch (action.type) {
          case 'SET_COLORS':
            return action.payload;
          default: 
            return state 
          } 
    }

  const handlesReducer = (state = [], action) => {
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
    switch (action.type) {
      case 'SET_HANDLE_LENGTHS':
        return action.payload;
      default:
        return state
    }
  }

  const conchosReducer = (state = [], action ) => {
    console.log('in SET_CONCHOS');
    switch (action.type) {
      case 'SET_CONCHOS':
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
    conchosReducer,
    cartReducer,
    orderTotalReducer,
  })