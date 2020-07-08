import {doctorsAPI} from "../../../api/doctorsAPI";
import {isDoctorProfileLoading, setDoctorProfile} from "./actions";

export const getDoctorProfile = id => async dispatch => {

    try {
        dispatch(isDoctorProfileLoading(true));

        const doctorProfile = await doctorsAPI.getDoctorById(id);

        dispatch(setDoctorProfile(doctorProfile.data));
        dispatch(isDoctorProfileLoading(false));

    } catch (e) {
        dispatch(isDoctorProfileLoading(false));

    }
};
