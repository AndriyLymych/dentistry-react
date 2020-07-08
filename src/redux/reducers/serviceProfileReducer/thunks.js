import {medicalServicesAPI} from "../../../api/medicalServicesAPI";
import {isServiceProfileLoading, setServiceProfile} from "./actions";

export const getServiceProfile = id => async dispatch => {

    try {
        dispatch(isServiceProfileLoading(true));

        const serviceProfile = await medicalServicesAPI.getMedicalServiceById(id);

        dispatch(setServiceProfile(serviceProfile.data));
        dispatch(isServiceProfileLoading(false));

    } catch (e) {
        dispatch(isServiceProfileLoading(false));

    }


};