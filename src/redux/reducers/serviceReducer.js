import {
    SET_IS_DELETED,
    SET_IS_SERVICE_WORK_DONE,
    SET_LOADING_PROGRESS,
    SET_MEDICAL_SERVICES
} from "../../constant/actionTypes/servicesAC";
import {medicalServicesAPI} from "../../api/medicalServicesAPI";
import {checkAccessTokenPresent} from "../../helpers/checkAccessTokenPresent";

const initialState = {
    services: [],
    isLoading: false,
    isServiceWorkDone: false,
    isDeleted: false
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

    dispatch(setLoadingProgress(true));

    let services = await medicalServicesAPI.getAllMedicalServices();

    dispatch(setServices(services.data));

    dispatch(setLoadingProgress(false));


};

export const addMedicalService = (service, description, photo, price) => async dispatch => {

    dispatch(setLoadingProgress(true));

    const token = checkAccessTokenPresent();

    if (token) {

        const addService = await medicalServicesAPI.addService(service, description, photo, price, token);

        if (addService) {

            dispatch(setIsServiceWorkDone(true));
            dispatch(setLoadingProgress(false));
        }

    }
};

export const deleteMedicalService = id => async dispatch => {

    dispatch(setLoadingProgress(true));

    const token = checkAccessTokenPresent();

    if (token) {

        const deleteService = await medicalServicesAPI.deleteService(id, token);

        if (deleteService) {

            dispatch(setIsDeleted(true));
            dispatch(setLoadingProgress(false));
        }

    }
};


export default serviceReducer;