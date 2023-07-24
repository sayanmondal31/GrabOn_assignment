import { all } from "redux-saga/effects";
import { watchAsyncPostSaga } from "./postSaga";

export function* rootSaga() {
  yield all([watchAsyncPostSaga()]);
}
