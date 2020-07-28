import { combineReducers } from "redux";
import decks from "./decks";
import questions from "./questions"
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  decks,
  // questions,
  loadingBarReducer,
});
