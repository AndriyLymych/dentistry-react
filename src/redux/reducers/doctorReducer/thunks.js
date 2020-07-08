import {doctorsAPI} from "../../../api/doctorsAPI";
import {setDoctors, setIsLoading, setSpecialities} from "./actions";

export const getDoctors = () => async dispatch => {

    try {
        dispatch(setIsLoading(true));

        let doctors = await doctorsAPI.getDoctors();

        dispatch(setDoctors(doctors.data));
        dispatch(setIsLoading(false));
    } catch (e) {
        dispatch(setIsLoading(false));

    }

};

export const getSpecialities = () => async dispatch => {

    try {
        dispatch(setIsLoading(true));

        let specialities = await doctorsAPI.getDoctorSpecialities();

        dispatch(setSpecialities(specialities.data));
        dispatch(setIsLoading(false));
    } catch (e) {
        dispatch(setIsLoading(false));

    }

};