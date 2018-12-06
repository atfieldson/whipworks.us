import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

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
    yield axios({
      method: 'POST',
      url: '/order/placeorder',
      data: action.payload
    })
    yield put({ type: 'COMPLETED_ORDER' });
  } catch (error) {
    console.log(error)
  }
}

function* orderSaga() {
  yield takeLatest('POST_ADDRESS', postAddress);
  yield takeLatest('PLACE_ORDER', placeOrder);
}

export default orderSaga;