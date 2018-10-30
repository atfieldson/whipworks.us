import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchColors() {
    try {
        const colors = yield call(
          axios.get, '/design/color'
        );
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