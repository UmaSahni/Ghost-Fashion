import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import thunk from "redux-thunk";
import { reducer as womenReducer } from "./WomenReducer/reducer";
const rootReducer = combineReducers({
  womenReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
