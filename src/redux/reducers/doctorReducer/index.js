import {SET_DOCTORS, SET_IS_LOADING, SET_SPECIALITY} from "./constants";

const initialState = {
    doctors: [],
    isLoading: false,
    specialities: []
};


const doctorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DOCTORS :
            return {
                ...state,
                doctors: action.payload
            };
        case SET_SPECIALITY :
            return {
                ...state,
                specialities: action.payload
            };
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        default :
            return state
    }

};

export default doctorReducer
