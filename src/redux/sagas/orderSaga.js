import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';


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

function* determineShipping(action) {
  try {
    const shipping = yield call(
      axios.get, 'order/shipping'
    )
    yield put(
      {type: 'SET_SHIPPING_PROFILES', payload: shipping.data}
    )
    yield put(
      {type: 'SET_DOM_INT', payload: action.payload.domestic}
    )
    yield put(
      {type: 'SET_SHIPPING_TOTAL', payload: action.payload.cartShippingProfiles}
    )
  } catch(error) {
    console.log(error);
  }
}

function* placeOrder(action) {
  try {

    const order = yield call( axios.post, '/order/placeorder', action.payload);

    // const order = yield 
    //   axios({
    //     method: 'POST',
    //     url: '/order/placeorder',
    //     data: action.payload
    //   });

    // yield axios({
    //   method: 'POST',
    //   url: '/order/placeorder',
    //   data: action.payload
    // })
    console.log('This is the order:', order);
    if (order.status === 200){
    yield put({ type: 'COMPLETED_ORDER' });
    }
    else {
      yield put({ type: 'ORDER_FAILURE' })
    }
  } catch (error) {
    console.log(error)
  }
}

function* orderSaga() {
  yield takeLatest('POST_ADDRESS', postAddress);
  yield takeLatest('PLACE_ORDER', placeOrder);
  yield takeLatest('DETERMINE_SHIPPING', determineShipping)
}

export default orderSaga;