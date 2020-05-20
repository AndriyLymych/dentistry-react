import {SET_SERVICE_PROFILE, SET_LOADING_PROGRESS} from "../../constant/actionTypes/serviceProfileAC";
import {medicalServicesAPI} from "../../api/medicalServicesAPI";

const initialState = {
    serviceProfile: [],
    isLoading: false
};

const serviceProfileReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_SERVICE_PROFILE :
            return {
                ...state,
                serviceProfile: action.payload
            };

        case SET_LOADING_PROGRESS :
            return {
                ...state,
                isLoading: action.payload
            };

        default:
            return state

    }
};

const setServiceProfile = payload => ({type:SET_SERVICE_PROFILE,payload});
const isServiceProfileLoading = payload => ({type:SET_LOADING_PROGRESS,payload});

export const getServiceProfile = id => async dispatch => {

    dispatch(isServiceProfileLoading(true));

    const serviceProfile = await medicalServicesAPI.getMedicalServiceById(id);

    dispatch(setServiceProfile(serviceProfile.data));

    dispatch(isServiceProfileLoading(false));



};

export default serviceProfileReducer;