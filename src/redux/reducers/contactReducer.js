const initState = {
  loading: false,
  error: null,
  success: false
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "SUBMIT_MESSAGE": {
      return {
        ...state,
        loading: true,
        error: null,
        success: false
      };
    }

    case "SUBMIT_MESSAGE_SUCCESS": {
      return {
        ...state,
        loading: false,
        success: true
      };
    }

    case "SUBMIT_MESSAGE_FAILURE": {
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
