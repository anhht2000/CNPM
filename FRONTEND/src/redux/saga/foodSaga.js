import { call, put, takeLatest, debounce } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import foodApi from "../../api/foodApi";
import {
  actionGetCater,
  actionGetCaterSuccess,
  actionGetFood,
  actionGetFoodSuccess,
  actionSearch,
  actionSetFilter,
} from "../slice/food";

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

function* handleSetFilter({ payload }) {
  try {
    const { data } = yield call(foodApi.getAllFoods, { category: payload });
    yield put(actionGetFoodSuccess(data));
  } catch (error) {
    toast.error("System have a problem");
  }
}

function* handleSearch({ payload }) {
  try {
    const { data } = yield call(foodApi.getAllFoods, { search: payload });
    yield put(actionGetFoodSuccess(data));
  } catch (error) {
    toast.error("System have a problem");
  }
}

export default function* foodSaga() {
  yield takeLatest(actionGetFood.type, handleGetFood);
  yield takeLatest(actionGetCater.type, handleGetCater);
  yield takeLatest(actionSetFilter.type, handleSetFilter);
  yield debounce(1000, actionSearch.type, handleSearch);
}
