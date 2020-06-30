import {doctorsAPI} from "../../api/doctorsAPI";
import {SET_DOCTOR_PROFILE, SET_LOADING_PROGRESS} from "../../constant/actionTypes/doctorProfileAC";

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

const setDoctorProfile = payload => ({type: SET_DOCTOR_PROFILE, payload});
const isDoctorProfileLoading = payload => ({type: SET_LOADING_PROGRESS, payload});

export const getDoctorProfile = id => async dispatch => {

    try {
        dispatch(isDoctorProfileLoading(true));

        const doctorProfile = await doctorsAPI.getDoctorById(id);

        dispatch(setDoctorProfile(doctorProfile.data));

        dispatch(isDoctorProfileLoading(false));

    } catch (e) {
        dispatch(isDoctorProfileLoading(false));

    }


};

export default doctorProfileReducer;