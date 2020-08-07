import {medicalServicesAPI} from "../../../api/medicalServicesAPI";
import {checkAccessTokenPresent} from "../../../helpers/checkAccessTokenPresent";
import {refreshUserToken} from "../refreshReducer/thunks";
import {setServiceProfile} from "../serviceProfileReducer/actions";
import {customErrors} from "../../../constant/customErrors/customErrors";
import {setIsDeleted, setIsServiceWorkDone, setLoadingProgress, setServices, updateServicePhotoErrMsg} from "./actions";

export const getServicesFromDB = () => async dispatch => {

    try {
        dispatch(setLoadingProgress(true));

        let services = await medicalServicesAPI.getAllMedicalServices();
        // console.log('1');
        console.log(services.data);
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
            // dispatch(refreshUserToken(e.response.data.code))

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
                dispatch(updateServicePhotoErrMsg(null))

            });
        }
    } catch (e) {

        dispatch(setLoadingProgress(false));

        if (e.response.data.code) {

            dispatch(updateServicePhotoErrMsg(customErrors[e.response.data.code].message));
            dispatch(refreshUserToken(e.response.data.code))

        }
    }
};