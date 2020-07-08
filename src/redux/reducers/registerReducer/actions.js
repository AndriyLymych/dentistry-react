import {SET_GENDERS, SET_IS_REGISTER_SUCCESS, SET_REGISTER_ERR_MSG, SET_REGISTER_LOADING} from "./constants";

export const setIsRegisterSuccess = payload => ({type: SET_IS_REGISTER_SUCCESS, payload});
export const setRegisterLoading = payload => ({type: SET_REGISTER_LOADING, payload});
export const setRegisterErrMsg = payload => ({type: SET_REGISTER_ERR_MSG, payload});
export const setGenders = payload => ({type: SET_GENDERS, payload});