import { combineReducers, createStore } from "redux";
import goodsReducer from "../reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    goods: goodsReducer
})

const store = createStore(rootReducer, composeWithDevTools())

export default store