import {doctorsAPI} from "../../api/doctorsAPI";

const SET_DOCTORS = 'dentistry-rect/doctor-reducer/set-doctors';
const SET_IS_LOADING = 'dentistry-rect/doctor-reducer/set-isLoading';
const SET_SPECIALITY = 'dentistry-rect/doctor-reducer/set-speciality';

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

export const setDoctors = payload => ({type: SET_DOCTORS, payload});
export const setSpecialities = payload => ({type: SET_SPECIALITY, payload});
export const setIsLoading = isLoading => ({type: SET_IS_LOADING, isLoading});

export const getDoctors = () => async dispatch => {

    try {
        dispatch(setIsLoading(true));

        let doctors = await doctorsAPI.getDoctors();

        dispatch(setDoctors(doctors.data));

        dispatch(setIsLoading(false));
    } catch (e) {
        dispatch(setIsLoading(false));

    }

};

export const getSpecialities = () => async dispatch => {

    try {
        dispatch(setIsLoading(true));

        let specialities = await doctorsAPI.getDoctorSpecialities();

        dispatch(setSpecialities(specialities.data));

        dispatch(setIsLoading(false));
    } catch (e) {
        dispatch(setIsLoading(false));

    }

};

export default doctorReducer
