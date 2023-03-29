
import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
// import { reducer as authReducer} from "./AuthReducer/reducer"
import thunk from "redux-thunk"
const rootReducer = combineReducers({})

export const store = legacy_createStore (rootReducer, applyMiddleware(thunk) )