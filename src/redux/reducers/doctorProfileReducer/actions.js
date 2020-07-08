import {SET_DOCTOR_PROFILE, SET_LOADING_PROGRESS} from "./constans";

export const setDoctorProfile = payload => ({type: SET_DOCTOR_PROFILE, payload});
export const isDoctorProfileLoading = payload => ({type: SET_LOADING_PROGRESS, payload});