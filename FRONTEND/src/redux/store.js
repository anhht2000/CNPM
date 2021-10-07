import { configureStore, combineReducers } from "@reduxjs/toolkit";
import appReducer from "./slice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";

const rootReducer = combineReducers({
  app: appReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(sagaMiddleware);
  },
});
sagaMiddleware.run(rootSaga);

export default store;
