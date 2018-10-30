import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchConchos() {
    try {
        const conchos = yield call(
          axios.get, '/design/concho'
        );
        yield put(
            { type: 'SET_CONCHOS', payload: conchos.data}
        );
      } catch (error) {
        // sets that the async request is finished
        console.log(error);
      } 
}

function* conchoSaga() {
  yield takeLatest('FETCH_CONCHOS', fetchConchos);
}

export default conchoSaga;