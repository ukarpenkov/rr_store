import { combineReducers, createStore } from "redux"
import sortReducer from "../reducers/sortReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import searchReducer from "../reducers/searchReducer"
import goodCardReducer from "../reducers/goodCardReducer"

const rootReducer = combineReducers({
    goods: sortReducer,
    filteredGoods: searchReducer,
    currentGood: goodCardReducer
})

const store = createStore(rootReducer, composeWithDevTools())

export default store