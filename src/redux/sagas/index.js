import { all } from "redux-saga/effects";
import loginSaga from "./loginSaga";
import registrationSaga from "./registrationSaga";
import userSaga from "./userSaga";
import colorSaga from "./colorSaga";
import handleSaga from "./handleSaga";
import whipLengthSaga from "./whipLengthSaga";
import handleLengthSaga from "./handleLengthSaga";
import conchoSaga from "./conchoSaga";
import orderSaga from "./orderSaga";
import contactSaga from "./contactSaga";

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    colorSaga(),
    handleSaga(),
    whipLengthSaga(),
    handleLengthSaga(),
    conchoSaga(),
    orderSaga(),
    contactSaga()
  ]);
}
