import {checkAccessTokenPresent} from "../../../helpers/checkAccessTokenPresent";
import {userAPI} from "../../../api/userAPI";
import {refreshUserToken} from "../refreshReducer/thunks";
import {setIsEvaluated, setIsMarkLoading, setMark} from "./actions";
import {customErrors} from "../../../constant/customErrors/customErrors";

export const setDoctorMark = (mark, doctor_id) => async dispatch => {
    try {

        dispatch(setIsMarkLoading(false));

        const token = checkAccessTokenPresent();

        const postMark = await userAPI.setMark(token, mark, doctor_id);

        const avgMark = await userAPI.getAVGMark(doctor_id);
        const isEvaluated = await userAPI.getIsEvaluated(token, doctor_id);

        Promise.all([postMark, avgMark, isEvaluated]).then(() => {

            dispatch(setMark(avgMark.data.average_doctor_mark));
            dispatch(setIsEvaluated(isEvaluated.data));
            dispatch(setIsMarkLoading(true));

        });

    } catch (e) {
        dispatch(setIsMarkLoading(true));
        if (e.response.data.code === customErrors[4012].code) {
            dispatch(refreshUserToken());
            dispatch(setDoctorMark(mark, doctor_id))
        }

    }
};
export const getIsEvaluatedDoctor = doctor_id => async dispatch => {

    try {
        dispatch(setIsMarkLoading(false));

        const token = checkAccessTokenPresent();

        const isEvaluated = await userAPI.getIsEvaluated(token, doctor_id);

        dispatch(setIsEvaluated(isEvaluated.data));


        dispatch(setIsMarkLoading(true));
    } catch (e) {
        dispatch(setIsMarkLoading(true));

        if (e.response.data.code === customErrors[4012].code) {
            dispatch(refreshUserToken());
            dispatch(getIsEvaluatedDoctor(doctor_id))
        }
    }


};
export const getAverageDoctorMark = doctor_id => async dispatch => {

    try {
        dispatch(setIsMarkLoading(false));

        const markData = await userAPI.getAVGMark(doctor_id);

        dispatch(setMark(markData.data.average_doctor_mark));

        dispatch(setIsMarkLoading(true));

    } catch (e) {
        dispatch(setIsMarkLoading(true));

    }

};