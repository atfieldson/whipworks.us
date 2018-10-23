import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchColors() {
    console.log('in FETCH_COLORS')
    try {
        const colors = yield call(
          axios.get, '/color'
        );
        yield console.log('colors:', colors)
        yield put(
            { type: 'SET_COLORS', payload: colors.data}
        );
      } catch (error) {
        // sets that the async request is finished
        console.log(error);
      }  
}

function* colorSaga() {
  yield takeLatest('FETCH_COLORS', fetchColors);
}

export default colorSaga;