import {SET_DOCTORS, SET_IS_LOADING, SET_SPECIALITY} from "./constants";

export const setDoctors = payload => ({type: SET_DOCTORS, payload});
export const setSpecialities = payload => ({type: SET_SPECIALITY, payload});
export const setIsLoading = isLoading => ({type: SET_IS_LOADING, isLoading});
