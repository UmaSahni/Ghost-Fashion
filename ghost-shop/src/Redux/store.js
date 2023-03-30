import { reducer as authReducer } from "./authReducer/authReducer";
import { reducer as productReducer } from "./productReducer/productReducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as adminReducer} from "./AdminReducer/reducer"
import thunk from "redux-thunk";
import { reducer as womenReducer } from "./WomenReducer/reducer"

const rootReducer = combineReducers({ authReducer,productReducer, adminReducer  });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
