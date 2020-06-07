import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import doctorReducer from "./reducers/doctorReducer";
import registerReducer from "./reducers/registerReducer";
import serviceReducer from "./reducers/serviceReducer";
import serviceProfileReducer from "./reducers/serviceProfileReducer";
import doctorProfileReducer from "./reducers/doctorProfileReducer";
import appReducer from "./reducers/appReducer";
import myReceptionReducer from "./reducers/myReceptionReducer";
import receptionReducer from "./reducers/receptionReducer";
import commentReducer from "./reducers/commentReducer";
import doctorMarkReducer from "./reducers/doctorMarkReducer";

const reducers = combineReducers({
    doctorReducer,
    authReducer,
    registerReducer,
    serviceReducer,
    serviceProfileReducer,
    form: formReducer,
    doctorProfileReducer,
    appReducer,
    myReceptionReducer,
    receptionReducer,
    commentReducer,
    doctorMarkReducer
});


//для розширення хрому - редакс
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));



export default store
