import {SET_DOCTOR_MARK, SET_IS_EVALUATED, SET_IS_MARK_LOADING} from "../../constant/actionTypes/doctorMarkAC";
import {checkAccessTokenPresent} from "../../helpers/checkAccessTokenPresent";
import {userAPI} from "../../api/userAPI";

const initialState = {
    mark: 1,
    isEvaluated: false,
    isMarkLoading: true
};

const doctorMarkReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_DOCTOR_MARK :
            return {
                ...state,
                mark: action.payload
            };
        case SET_IS_EVALUATED :
            return {
                ...state,
                isEvaluated: action.payload
            };
        case SET_IS_MARK_LOADING :
            return {
                ...state,
                isMarkLoading: action.payload
            };

        default :
            return state

    }
};

const setMark = payload => ({type: SET_DOCTOR_MARK, payload});
const setIsEvaluated = payload => ({type: SET_IS_EVALUATED, payload});
const setIsMarkLoading = payload => ({type: SET_IS_MARK_LOADING, payload});

export const setDoctorMark = (mark, doctor_id) => async dispatch => {

    dispatch(setIsMarkLoading(false));

    const token = checkAccessTokenPresent();

    const markData = await userAPI.setMark(token, mark, doctor_id);

    dispatch(setMark(markData.data.avgMark));

    dispatch(setIsEvaluated(markData.data.isEvaluated));

    dispatch(setIsMarkLoading(true));


};
export const getIsEvaluatedDoctor = doctor_id => async dispatch => {

    dispatch(setIsMarkLoading(false));

    const token = checkAccessTokenPresent();

    const isEvaluated = await userAPI.getIsEvaluated(token, doctor_id);

    dispatch(setIsEvaluated(isEvaluated.data));


    dispatch(setIsMarkLoading(true));


};
export const getAverageDoctorMark = doctor_id => async dispatch => {

    dispatch(setIsMarkLoading(false));

    const markData = await userAPI.getAVGMark(doctor_id);

    dispatch(setMark(markData.data.average_doctor_mark));

    dispatch(setIsMarkLoading(true));

};

export default doctorMarkReducer;