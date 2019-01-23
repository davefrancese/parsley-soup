// REDUCERS
import { combineReducers } from "redux";
import soupsReducer from "./soupsReducer";
import dateReducer from "./date";

export default combineReducers({
  soupsReducer,
  dateReducer
});
