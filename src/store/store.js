import { combineReducers, createStore } from "redux";
import sortReducer from "../reducers/sortReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    goods: sortReducer
})

const store = createStore(rootReducer, composeWithDevTools())

export default store