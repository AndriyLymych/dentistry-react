import {SET_LOADING_PROGRESS, SET_MY_RECEPTIONS} from "./constants";

export const setMyReceptions = payload => ({type: SET_MY_RECEPTIONS, payload});
export const setIsLoading = payload => ({type: SET_LOADING_PROGRESS, payload});