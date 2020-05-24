import {doctorsAPI} from "../../api/doctorsAPI";

const SET_DOCTORS = 'dentistry-rect/doctor-reducer/set-doctors';
const SET_IS_LOADING = 'dentistry-rect/doctor-reducer/set-isLoading';

const initialState = {
    doctors: [],
    isLoading: false
};


const doctorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DOCTORS :
            return {
                ...state,
                doctors: action.doctors
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

export const setDoctors = doctors => ({type: SET_DOCTORS, doctors});

export const setIsLoading = isLoading => ({type: SET_IS_LOADING, isLoading});

export const getDoctors = () => async dispatch => {

    dispatch(setIsLoading(true));

    let doctors = await doctorsAPI.getDoctors();

    dispatch(setDoctors(doctors.data));

    dispatch(setIsLoading(false));

};

export default doctorReducer
