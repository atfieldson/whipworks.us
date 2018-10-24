import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchWhipLengths() {
    console.log('in FETCH_WHIP_LENGTHS')
    try {
        const lengths = yield call(
          axios.get, '/design/whiplength'
        );
        yield console.log('handles:', lengths)
        yield put(
            { type: 'SET_WHIP_LENGTHS', payload: lengths.data}
        );
      } catch (error) {
        // sets that the async request is finished
        console.log(error);
      } 
}

function* handleSaga() {
  yield takeLatest('FETCH_WHIP_LENGTHS', fetchWhipLengths);
}

export default handleSaga;