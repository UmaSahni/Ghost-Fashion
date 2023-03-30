import { reducer as authReducer } from "./authReducer/authReducer";
import { reducer as productReducer } from "./productReducer/productReducer";
import { reducer as WomenReducer } from "./WomenReducer/reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ authReducer,productReducer,WomenReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
