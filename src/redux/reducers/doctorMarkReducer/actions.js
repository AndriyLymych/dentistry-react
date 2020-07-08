import {SET_DOCTOR_MARK, SET_IS_EVALUATED, SET_IS_MARK_LOADING} from "./constants";

export const setMark = payload => ({type: SET_DOCTOR_MARK, payload});
export const setIsEvaluated = payload => ({type: SET_IS_EVALUATED, payload});
export const setIsMarkLoading = payload => ({type: SET_IS_MARK_LOADING, payload});