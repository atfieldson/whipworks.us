import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* postAddress(action) {
    try {
        yield
        axios({
          method: 'POST',
          url: '/order/address',
          data: action.payload,
        });
      } catch (error) {
        // sets that the async request is finished
        console.log(error);
      } 
}

function* placeOrder(action) {
  try {
    debugger;
    yield
    axios({
      method: 'POST',
      url: '/order/placeorder',
      data: action.payload.stripe
    })
    debugger;
    yield
    axios({
      method: 'POST',
      url: '/order/address',
      data: action.payload.order,
    });
  } catch (error) {
    console.log(error)
  }
}

function* orderSaga() {
  yield takeLatest('POST_ADDRESS', postAddress);
  yield takeLatest('PLACE_ORDER', placeOrder);
}

export default orderSaga;