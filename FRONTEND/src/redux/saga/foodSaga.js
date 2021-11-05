import { call, put, takeLatest } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import foodApi from "../../api/foodApi";
import { actionGetCater, actionGetCaterSuccess, actionGetFood, actionGetFoodSuccess } from "../slice/food";

function* handleGetFood({ payload }) {
  try {
    const { data } = yield call(foodApi.getAllFoods, payload);
    yield put(actionGetFoodSuccess(data));
  } catch (error) {
    toast.error("System have a problem");
  }
}

function* handleGetCater() {
  try {
    const { data } = yield call(foodApi.getCategory);

    yield put(actionGetCaterSuccess(data));
  } catch (error) {
    toast.error("System have a problem");
  }
}

export default function* foodSaga() {
  yield takeLatest(actionGetFood.type, handleGetFood);
  yield takeLatest(actionGetCater.type, handleGetCater);
}
