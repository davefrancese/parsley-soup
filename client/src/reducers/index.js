// REDUCERS
import { combineReducers } from "redux";
import soupsReducer from "./soupsReducer";
import dateReducer from "./dateReducer";

export default combineReducers({
  soupsReducer,
  dateReducer
});
