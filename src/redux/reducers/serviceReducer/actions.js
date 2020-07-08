import {
    SET_IS_DELETED,
    SET_IS_SERVICE_WORK_DONE,
    SET_LOADING_PROGRESS,
    SET_MEDICAL_SERVICES,
    UPDATE_SERVICE_PHOTO_ERR_MSG
} from "./constants";

export const setServices = payload => ({type: SET_MEDICAL_SERVICES, payload});
export const setLoadingProgress = payload => ({type: SET_LOADING_PROGRESS, payload});
export const setIsServiceWorkDone = payload => ({type: SET_IS_SERVICE_WORK_DONE, payload});
export const setIsDeleted = payload => ({type: SET_IS_DELETED, payload});
export const updateServicePhotoErrMsg = payload => ({type: UPDATE_SERVICE_PHOTO_ERR_MSG, payload});