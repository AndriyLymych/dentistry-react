import {SET_SERVICE_PROFILE, SET_LOADING_PROGRESS} from "./constants";

const initialState = {
    services: [],
    serviceProfile: [],
    isLoading: false
};

const serviceProfileReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_SERVICE_PROFILE :
            return {
                ...state,
                serviceProfile: action.payload
            };

        case SET_LOADING_PROGRESS :
            return {
                ...state,
                isLoading: action.payload
            };

        default:
            return state

    }
};

export default serviceProfileReducer;