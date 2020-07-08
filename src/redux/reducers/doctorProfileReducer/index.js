import {SET_DOCTOR_PROFILE, SET_LOADING_PROGRESS} from "./constans";

const initialState = {
    doctorProfile: [],
    isLoading: false
};

const doctorProfileReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_DOCTOR_PROFILE :
            return {
                ...state,
                doctorProfile: action.payload
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

export default doctorProfileReducer;