import {SET_IS_RECEPTION_LOADING, SET_IS_RECEPTION_SUCCESS} from "./constants";

export const setIsReceptionSuccess = payload => ({type: SET_IS_RECEPTION_SUCCESS, payload});
export const setIsReceptionLoading = payload => ({type: SET_IS_RECEPTION_LOADING, payload});