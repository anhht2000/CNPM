import { combineReducers } from "redux";
import foodReducer from "./food";

const rootReducer = combineReducers({
  food: foodReducer,
});
export default rootReducer;
