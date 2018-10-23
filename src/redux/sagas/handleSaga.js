import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchHandles() {
    console.log('in FETCH_HANDLES')
    try {
        const handles = yield call(
          axios.get, '/handle'
        );
        yield console.log('handles:', handles)
        yield put(
            { type: 'SET_HANDLES', payload: handles.data}
        );
      } catch (error) {
        // sets that the async request is finished
        console.log(error);
      } 
}

function* handleSaga() {
  yield takeLatest('FETCH_HANDLES', fetchHandles);
}

export default handleSaga;