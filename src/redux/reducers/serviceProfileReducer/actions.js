import {SET_LOADING_PROGRESS, SET_SERVICE_PROFILE} from "./constants";

export const setServiceProfile = payload => ({type: SET_SERVICE_PROFILE, payload});
export const isServiceProfileLoading = payload => ({type: SET_LOADING_PROGRESS, payload});
