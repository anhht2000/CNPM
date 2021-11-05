import { takeLatest } from "@redux-saga/core/effects";
import { actionGetTop } from "../slice/home";

function* handleGetAll() {
  try {
  } catch (error) {}
}

export default function* homeSaga() {
  yield takeLatest(actionGetTop.type, handleGetAll);
}
