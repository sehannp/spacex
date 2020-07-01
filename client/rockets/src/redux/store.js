import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

import logger from 'redux-logger';
import { applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

const middlewares = [logger];
const store = createStore(rootReducer,applyMiddleware(...middlewares));
export default store;