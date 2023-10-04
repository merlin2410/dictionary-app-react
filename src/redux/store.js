import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import historyReducer from "./reducer/historyReducer.js";
import wordReducer from "./reducer/wordReducer.js";

const rootReducer = combineReducers({
  history: historyReducer,
  word: wordReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
