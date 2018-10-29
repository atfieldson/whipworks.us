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

function* orderSaga() {
  yield takeLatest('POST_ADDRESS', postAddress);
}

export default orderSaga;