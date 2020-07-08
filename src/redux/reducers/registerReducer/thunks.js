import {patientAPI} from "../../../api/patientAPI";
import {customErrors} from "../../../constant/customErrors/customErrors";
import {genderAPI} from "../../../api/genderAPI";
import {setGenders, setIsRegisterSuccess, setRegisterErrMsg, setRegisterLoading} from "./actions";

export const registerPatient = payload => async dispatch => {

    try {
        dispatch(setRegisterLoading(false));

        await patientAPI.registerPatient(payload);
        dispatch(setIsRegisterSuccess(true));
        dispatch(setRegisterLoading(true));
        dispatch(setRegisterErrMsg(null))


    } catch (e) {
        dispatch(setRegisterLoading(true));

        if (e.response.data.code) {
            dispatch(setRegisterErrMsg(customErrors[e.response.data.code].message))

        }

    }

};

export const getGenders = () => async dispatch => {
    try {
        dispatch(setRegisterLoading(false));

        const genders = await genderAPI.getAllGenders();

        dispatch(setGenders(genders.data));
        dispatch(setRegisterLoading(true));

    } catch (e) {

        dispatch(setRegisterLoading(true));

    }

};