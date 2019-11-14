import { combineReducers } from "redux";
import commentsReducer from "./comments";
import inputReducer from "./input";

const mainReducer = combineReducers({ comments: commentsReducer, input: inputReducer });

export default mainReducer;
