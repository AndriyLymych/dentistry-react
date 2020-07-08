import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {reducers} from "./store";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));

export default store