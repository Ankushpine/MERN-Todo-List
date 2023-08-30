import { createStore , combineReducers , applyMiddleware  } from "redux";
import todoReducer from "./Reducers/todoReducer";
import thunk from 'redux-thunk';
import { tabReducer } from "./Reducers/tabReducer";

const reducer = combineReducers({
    todos:todoReducer,
    currentTab: tabReducer
})

export const store = createStore(reducer , applyMiddleware(thunk));