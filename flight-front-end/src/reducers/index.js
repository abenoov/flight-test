import { combineReducers } from "redux";
import { flight } from "./flight";
import { auth } from "./AuthReducer"

export const reducers = combineReducers({
    flight,
    auth
})