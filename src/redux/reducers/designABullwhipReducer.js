import { combineReducers } from 'redux';

const designABullwhipReducer = (state = {
  color1: { name: '', url: '', unwaxedurl: '', id: '', spool_url: '' },
  color2: { name: '', url: '', unwaxedurl: '', id: '', spool_url: '' },
  waxed: 'yes',
  pattern: { name: '', id: '' },
  whipLength: { name: '', cost: '0', waxed_cost: '0', id: '', shipping_profile_id: '0' },
  handleLength: { name: '', cost: '0', id: '' },
  concho: { name: '', cost: '0', id: '' },
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
    case 'RESET_DESIGN_A_BULLWHIP':
      return {
        color1: { name: '', url: '', unwaxedurl: '', id: '', spool_url: '' },
        color2: { name: '', url: '', unwaxedurl: '', id: '', spool_url: '' },
        waxed: 'yes',
        pattern: { name: '', id: '' },
        whipLength: { name: '', cost: '0', waxed_cost: '0', id: '' },
        handleLength: { name: '', cost: '0', id: '' },
        concho: { name: '', cost: '0', id: '' },
        total: 0,
      }
    default:
      return state;
  }
};

const renderCanvas = (state = { renderHandle: false }, action) => {
  switch (action.type) {
    case 'RENDER_HANDLE':
      return { renderHandle: action.payload }
    default:
      return state
  }
}

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BULLWHIP_TO_CART':
      return [
        ...state,
        {
          type: 'bullwhip',
          item: action.payload,
        }];
    case 'DELETE_ITEM_FROM_CART':
      let newArray = state.slice(0);
      newArray.splice(action.payload, 1)
      return newArray;
    case 'RESET_CART_REDUCER':
      return [];
    default:
      return state;
  }
}

const shippingTotal = (state = { total: 0, domestic: true, cartShippingProfiles: [], shipping_profiles: [] }, action) => {
  switch (action.type) {
    case 'SET_SHIPPING_PROFILES':
      return {
        ...state,
        shipping_profiles: action.payload
      };
    case 'SET_SHIPPING_TOTAL':
      let shippingTotal = 0;
      let initialShippingAdded = false;
      for (let profile of action.payload) {
        if (state.domestic === true) {
          if (action.payload.length >= 2 && initialShippingAdded === false) {
            shippingTotal += state.shipping_profiles[parseInt(profile) - 1].domestic_cost
            initialShippingAdded = true
          } else if (action.payload.length >= 2 && initialShippingAdded === true) {
            shippingTotal += state.shipping_profiles[parseInt(profile) - 1].domestic_additional
          } else {
            shippingTotal += state.shipping_profiles[parseInt(profile) - 1].domestic_cost
          }
        } else if (state.domestic === false) {
          if (action.payload.length >= 2 && initialShippingAdded === false) {
            shippingTotal += state.shipping_profiles[parseInt(profile) - 1].international_cost
            initialShippingAdded = true
          } else if (action.payload.length >= 2 && initialShippingAdded === true){
            shippingTotal += state.shipping_profiles[parseInt(profile) - 1].international_additional
          } else {
            shippingTotal += state.shipping_profiles[parseInt(profile) - 1].international_cost
          }
        }
      }
         // if (profile === '1' && action.payload.cartShippingProfiles.length < 2 && state.domestic === true) {
    //   shippingTotal += state.shipping_profiles[0].domestic_cost
    // } else if (profile === '1' && action.payload.cartShippingProfiles.length < 2 && state.domestic === true) {
    //   shippingTotal += state.shipping_profiles[1].domestic_cost
    // } else if (profile === '2' && action.payload.cartShippingProfiles.length < 2 && state.domestic === true) {
    //   shippingTotal += state.shipping_profiles[2].domestic_cost
    // } else if (profile === '0' && action.payload.cartShippingProfiles.length < 2 && state.domestic === false) {
    //   shippingTotal += state.shipping_profiles[0].international_cost
    // } else if (profile === '1' && action.payload.cartShippingProfiles.length < 2 && state.domestic === true) {
    //   shippingTotal += state.shipping_profiles[1].international_cost
    // } else if (profile === '2' && action.payload.cartShippingProfiles.length < 2 && state.domestic === true) {
    //   shippingTotal += state.shipping_profiles[2].international_cost
    // }
        return {
          ...state,
          total: shippingTotal
        }
    case 'SET_DOM_INT':

   
  
  return {
    ...state,
    total: shippingTotal,
    domestic: action.payload,
  };
    default:
return state
  }
}

const orderTotalReducer = (state = 0, action) => {
  switch (action.type) {
    case 'SET_ORDER_TOTAL':
      return action.payload;
    case 'SUBTRACT_FROM_TOTAL':
      return state - action.payload;
    case 'RESET_TOTAL_REDUCER':
      return 0;
    default:
      return state;
  };
}

const orderPlacedReducer = (state = 'no', action) => {
  switch (action.type) {
    case 'COMPLETED_ORDER':
      return 'yes';
    case 'ORDER_FAILURE':
      return 'failure';
    case 'LEFT_COMPLETED_PAGE':
      return 'no';
    default:
      return state;
  }
}

const shippingAddressReducer = (state = {
  first_name: '',
  last_name: '',
  shipping_street_address: '',
  shipping_city: '',
  shipping_state: '',
  shipping_country: '',
  shipping_zip: '',
  shipping_cost: 20,
  order_total: 0,
  order_notes: '',
}, action) => {
  switch (action.type) {
    case 'UPDATE_SHIPPING_INFO':
      return action.payload;
    case 'RESET_SHIPPING_ADDRESS_REDUCER':
      return {
        first_name: '',
        last_name: '',
        shipping_street_address: '',
        shipping_city: '',
        shipping_state: '',
        shipping_country: '',
        shipping_zip: '',
        shipping_cost: 20,
        order_total: 0,
        order_notes: '',
      }
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
      // console.log(action.payload);
      return action.payload;
    default:
      return state
  }
}

const whipLengthsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_WHIP_LENGTHS':
      return action.payload;
    default:
      return state
  }
}

const handleLengthsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_HANDLE_LENGTHS':
      return action.payload;
    default:
      return state
  }
}

const conchosReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CONCHOS':
      let conchos = []
      action.payload.map(concho => {
        if (concho.in_stock > 0) {
          conchos.push(concho);
        }
      });
      return conchos;
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
  shippingAddressReducer,
  renderCanvas,
  orderPlacedReducer,
  shippingTotal
})