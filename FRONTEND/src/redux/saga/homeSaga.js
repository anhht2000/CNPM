import { all, call, takeLatest, put } from "@redux-saga/core/effects";
import homeApi from "../../api/homeApi";
import { actionGetReceipt, actionGetReceiptSuccess, actionGetTop, actionGetTopSuccess } from "../slice/home";
import { toast } from "react-toastify";
import foodApi from "../../api/foodApi";

function* handleGetAll() {
  try {
    const data = yield all([
      call(homeApi.getTop, { label: "new" }),
      call(homeApi.getTop, { label: "popular" }),
      call(homeApi.getTop, { label: "bestseller" }),
    ]);

    const test = data.map((item) => item.data.content);
    const [topNew, popular, seller] = test;
    yield put(actionGetTopSuccess({ topNew, popular, seller }));
  } catch (error) {
    toast.error("Hệ thống có lỗi");
  }
}

function* handleGetReceipt() {
  try {
    const { data } = yield call(foodApi.getBill);

    yield put(actionGetReceiptSuccess(data.content));
  } catch (error) {
    toast.error("Hệ thống có lỗi");
  }
}

export default function* homeSaga() {
  yield takeLatest(actionGetTop.type, handleGetAll);
  yield takeLatest(actionGetReceipt.type, handleGetReceipt);
}
