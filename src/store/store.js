import { combineReducers, createStore } from "redux";
import sortReducer from "../reducers/sortReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import searchReducer from "../reducers/searchReducer";

const rootReducer = combineReducers({
    goods: sortReducer,
    filteredGoods: searchReducer
})

const store = createStore(rootReducer, composeWithDevTools())

export default store