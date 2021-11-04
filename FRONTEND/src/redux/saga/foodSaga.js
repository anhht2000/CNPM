import { call, put, takeLatest } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import foodApi from "../../api/foodApi";
import { actionGetFood, actionGetFoodSuccess } from "../slice/food";

function* handleGetFood({ payload }) {
  try {
    const { data } = yield call(foodApi.getAllFoods, payload);
    yield put(actionGetFoodSuccess(data));
  } catch (error) {
    toast.error("System have a problem");
  }
}

export default function* foodSaga() {
  yield takeLatest(actionGetFood.type, handleGetFood);
}
