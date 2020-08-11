import {
    ADD_SERVICE_PHOTO_ERR_MSG,
    SET_IS_DELETED,
    SET_IS_SERVICE_WORK_DONE,
    SET_LOADING_PROGRESS,
    SET_MEDICAL_SERVICES, UPDATE_SERVICE_PHOTO_ERR_MSG
} from "./constants";

const initialState = {
    services: [],
    isLoading: false,
    isServiceWorkDone: false,
    isDeleted: false,
    isServiceUpdated: false,
    updateMedicalServicePhotoErrMsg: null,
    addMedicalServicePhotoErrMsg: null
};

const serviceReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_MEDICAL_SERVICES :
            return {
                ...state,
                services: action.payload
            };
        case  SET_LOADING_PROGRESS :
            return {
                ...state,
                isLoading: action.payload
            };
        case  SET_IS_SERVICE_WORK_DONE :
            return {
                ...state,
                isServiceWorkDone: action.payload
            };
        case  SET_IS_DELETED :
            return {
                ...state,
                isDeleted: action.payload
            };
        case  UPDATE_SERVICE_PHOTO_ERR_MSG :
            return {
                ...state,
                updateMedicalServicePhotoErrMsg: action.payload
            };
        case  ADD_SERVICE_PHOTO_ERR_MSG :
            return {
                ...state,
                addMedicalServicePhotoErrMsg: action.payload
            };

        default :
            return state

    }
};

export default serviceReducer;