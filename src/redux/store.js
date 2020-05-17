import {applyMiddleware, combineReducers, compose, createStore} from "redux";
// import mainReducer from "./mainReducer";
// import usersReducer from "./usersReducer";
// import profileReducer from "./profileReducer"
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import doctorReducer from "./reducers/doctorReducer";
// import appReducer from "./appReducer";

const reducers = combineReducers({
    doctorReducer,
    authReducer,
    form: formReducer,
    // appReducer
});
//для розширення хрому - редакс
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));



export default store

window.state = store.getState();