import { combineReducers } from "redux";
import foodReducer from "./food";
import homeReducer from "./home";

const rootReducer = combineReducers({
  food: foodReducer,
  home: homeReducer,
});
export default rootReducer;
