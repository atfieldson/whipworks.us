import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchHandleLengths() {
    console.log('in FETCH_HANDLE_LENGTHS')
    try {
        const lengths = yield call(
          axios.get, '/design/handlelength'
        );
        yield console.log('handles:', lengths)
        yield put(
            { type: 'SET_HANDLE_LENGTHS', payload: lengths.data}
        );
      } catch (error) {
        // sets that the async request is finished
        console.log(error);
      } 
}

function* handleLengthSaga() {
  yield takeLatest('FETCH_HANDLE_LENGTHS', fetchHandleLengths);
}

export default handleLengthSaga;