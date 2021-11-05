import { all } from "redux-saga/effects";
import foodSaga from "./foodSaga";
import homeSaga from "./homeSaga";

export default function* rootSaga() {
  yield all([foodSaga(), homeSaga()]);
}
