import {SET_MY_RECEPTIONS, SET_LOADING_PROGRESS} from "./constants";

const initialState = {
    receptions: [],
    isLoading: false
};

const myReceptionReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_MY_RECEPTIONS :
            return {
                ...state,
                receptions: action.payload
            };
        case SET_LOADING_PROGRESS :
            return {
                ...state,
                isLoading: action.payload
            };

        default :
            return state

    }
};

export default myReceptionReducer;

