import axios from "axios";
import { put, takeLatest, call } from "redux-saga/effects";

const sendMessage = (email, name, message) =>
  axios({
    method: "post",
    url: "/contact",
    data: {
      email,
      name,
      message
    }
  });

function* submitContactForm(action) {
  try {
    yield call(sendMessage, action.email, action.name, action.message);
    yield put({ type: "SUBMIT_MESSAGE_SUCCESS" });
  } catch (error) {
    yield put({ type: "SUBMIT_MESSAGE_FAILURE", error });
  }
}

function* contactSaga() {
  yield takeLatest("SUBMIT_MESSAGE", submitContactForm);
}

export default contactSaga;
