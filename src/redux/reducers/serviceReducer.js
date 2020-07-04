import {
    SET_IS_DELETED, SET_IS_SERVICE_UPDATED,
    SET_IS_SERVICE_WORK_DONE,
    SET_LOADING_PROGRESS,
    SET_MEDICAL_SERVICES
} from "../../constant/actionTypes/servicesAC";
import {medicalServicesAPI} from "../../api/medicalServicesAPI";
import {checkAccessTokenPresent} from "../../helpers/checkAccessTokenPresent";
import {setServiceProfile} from "./serviceProfileReducer";
import {setErrorMsg} from "./errorReducer";
import {customErrors} from "../../constant/customErrors/customErrors";
import {refreshUserToken} from "./refreshReducer";

const initialState = {
    services: [],
    isLoading: false,
    isServiceWorkDone: false,
    isDeleted: false,
    isServiceUpdated: false
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

        default :
            return state

    }
};
export const setServices = payload => ({type: SET_MEDICAL_SERVICES, payload});
export const setLoadingProgress = payload => ({type: SET_LOADING_PROGRESS, payload});
export const setIsServiceWorkDone = payload => ({type: SET_IS_SERVICE_WORK_DONE, payload});
export const setIsDeleted = payload => ({type: SET_IS_DELETED, payload});


export const getServicesFromDB = () => async dispatch => {

    try {
        dispatch(setLoadingProgress(true));

        let services = await medicalServicesAPI.getAllMedicalServices();

        dispatch(setServices(services.data));
        dispatch(setLoadingProgress(false));

    } catch (e) {
        dispatch(setLoadingProgress(false));

    }
};

export const addMedicalService = (service, description, photo, price) => async dispatch => {

    try {
        dispatch(setLoadingProgress(true));

        const token = checkAccessTokenPresent();

        if (token) {

            const addService = await medicalServicesAPI.addService(service, description, photo, price, token);

            Promise.all([addService]).then(() => {
                    dispatch(setIsServiceWorkDone(true));
                    dispatch(setLoadingProgress(false));
                }
            );

        }
    } catch (e) {
        dispatch(setLoadingProgress(false));
        if (e.response.data.code) {
            dispatch(refreshUserToken(e.response.data.code))

        }
    }
};

export const deleteMedicalService = id => async dispatch => {

    try {
        dispatch(setLoadingProgress(true));

        const token = checkAccessTokenPresent();

        if (token) {

            const deleteService = await medicalServicesAPI.deleteService(id, token);
            Promise.all([deleteService]).then(() => {
                dispatch(setIsDeleted(true));
                dispatch(setLoadingProgress(false));
            });

        }
    } catch (e) {
        dispatch(setLoadingProgress(false));
        if (e.response.data.code) {
            dispatch(refreshUserToken(e.response.data.code))

        }
    }
};
export const updateMedicalService = (data, id) => async dispatch => {
    try {
        dispatch(setLoadingProgress(true));

        const token = checkAccessTokenPresent();

        if (token) {

            const updateService = await medicalServicesAPI.updateService(data, id, token);
            const serviceProfile = await medicalServicesAPI.getMedicalServiceById(id);

            Promise.all([updateService, serviceProfile]).then(() => {
                dispatch(setServiceProfile(serviceProfile.data));
                dispatch(setLoadingProgress(false));
            });

        }
    } catch (e) {
        dispatch(setLoadingProgress(false));
        if (e.response.data.code) {
            dispatch(refreshUserToken(e.response.data.code))

        }
    }
};
export const updateMedicalServicePhoto = (photo, id) => async dispatch => {

    try {
        dispatch(setLoadingProgress(true));

        const token = checkAccessTokenPresent();

        if (token) {

            const updateService = await medicalServicesAPI.updateServicePhoto(photo, id, token);
            const serviceProfile = await medicalServicesAPI.getMedicalServiceById(id);


            Promise.all([updateService, serviceProfile]).then(() => {

                dispatch(setServiceProfile(serviceProfile.data));
                dispatch(setLoadingProgress(false));
                dispatch(setErrorMsg(null))

            });
        }
    } catch (e) {

        dispatch(setLoadingProgress(false));

        if (e.response.data.code) {

            dispatch(setErrorMsg(customErrors[e.response.data.code].message));
            dispatch(refreshUserToken(e.response.data.code))

        }
    }
};


export default serviceReducer;