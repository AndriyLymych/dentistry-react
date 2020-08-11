import {medicalServicesAPI} from "../../../api/medicalServicesAPI";
import {checkAccessTokenPresent} from "../../../helpers/checkAccessTokenPresent";
import {refreshUserToken} from "../refreshReducer/thunks";
import {setServiceProfile} from "../serviceProfileReducer/actions";
import {customErrors} from "../../../constant/customErrors/customErrors";
import {
    setIsDeleted,
    setIsServiceWorkDone,
    setLoadingProgress,
    setServices,
    updateServicePhotoErrMsg,
    addServicePhotoErrMsg
} from "./actions";

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

export const addMedicalService = (service, small_description, description, photo, price) => async dispatch => {

    try {
        dispatch(setLoadingProgress(true));

        const token = checkAccessTokenPresent();

        if (token) {

            const addService = await medicalServicesAPI.addService(service, small_description, description, photo, price, token);

            Promise.all([addService]).then(() => {
                    dispatch(setIsServiceWorkDone(true));
                    dispatch(addServicePhotoErrMsg(null));
                    dispatch(setLoadingProgress(false));
                }
            );

        }
    } catch (e) {
        dispatch(setLoadingProgress(false));

        if (e.response.data.code===customErrors[4037].code) {
            dispatch(addServicePhotoErrMsg(customErrors[e.response.data.code].message));
        }
        if (e.response.data.code === customErrors[4012].code) {
            dispatch(refreshUserToken());
            dispatch(addMedicalService(service, small_description, description, photo, price))
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
        if (e.response.data.code === customErrors[4012].code) {
            dispatch(refreshUserToken());
            dispatch(deleteMedicalService(id))
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
        if (e.response.data.code === customErrors[4012].code) {
            dispatch(refreshUserToken());
            dispatch(updateMedicalService(data, id))
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

        }
        if (e.response.data.code === customErrors[4012].code) {
            dispatch(refreshUserToken());
            dispatch(updateMedicalServicePhoto(photo, id))
        }
    }
};