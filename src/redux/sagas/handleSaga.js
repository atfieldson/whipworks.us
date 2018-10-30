import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchHandles() {
    try {
        const handles = yield call(
          axios.get, '/design/design'
        );
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