import {SET_LOADING_PROGRESS, SET_MEDICAL_SERVICES} from "../../constant/actionTypes/servicesAC";
import {medicalServicesAPI} from "../../api/medicalServicesAPI";

const initialState = {
    services: [],
    isLoading: false
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

        default :
            return state

    }
};
export const setServices = payload => ({type: SET_MEDICAL_SERVICES, payload});
export const setLoadingProgress = payload => ({type: SET_LOADING_PROGRESS, payload});

export const getServicesFromDB = () => async dispatch => {

    dispatch(setLoadingProgress(true));

    let services = await medicalServicesAPI.getAllMedicalServices();

    dispatch(setServices(services.data));

    dispatch(setLoadingProgress(false));



};
export default serviceReducer;