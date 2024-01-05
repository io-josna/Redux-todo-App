import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { TodoReducer } from "./Reducers/TodoReducers";

export const reducer = combineReducers({
  Todo: TodoReducer,
});

export const initialState = {};

export const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
