import {checkAccessTokenPresent} from "../../../helpers/checkAccessTokenPresent";
import {receptionAPI} from "../../../api/receptionAPI";
import {setIsLoading, setMyReceptions} from "./actions";
import {customErrors} from "../../../constant/customErrors/customErrors";
import {refreshUserToken} from "../refreshReducer/thunks";

export const getMyProfileReceptions = email => async dispatch => {

    try {
        dispatch(setIsLoading(true));

        const token = checkAccessTokenPresent();

        const receptions = await receptionAPI.getMyReception(token, email);

        dispatch(setMyReceptions(receptions.data));
        dispatch(setIsLoading(false));

    } catch (e) {
        dispatch(setIsLoading(false));
        if (e.response.data.code === customErrors[4012].code) {
            dispatch(refreshUserToken());
            dispatch(getMyProfileReceptions(email))
        }
    }


};
export const getAllReception = () => async dispatch => {

    try {
        dispatch(setIsLoading(true));

        const token = checkAccessTokenPresent();

        const receptions = await receptionAPI.getAllReceptionsRecords(token);

        dispatch(setMyReceptions(receptions.data));
        dispatch(setIsLoading(false));
    } catch (e) {
        dispatch(setIsLoading(false));
        if (e.response.data.code === customErrors[4012].code) {
            dispatch(refreshUserToken());
            dispatch(getAllReception())
        }
    }
};

export const deleteReceptionRecordByPatient = (id, email) => async dispatch => {

    try {
        const token = checkAccessTokenPresent();

        await receptionAPI.dropReceptionRecordByPatient(id, token);
        const receptions = await receptionAPI.getMyReception(token, email);

        dispatch(setMyReceptions(receptions.data))
    } catch (e) {
        if (e.response.data.code === customErrors[4012].code) {
            dispatch(refreshUserToken());
            dispatch(deleteReceptionRecordByPatient(id, email))
        }
    }


};
export const deleteReceptionRecordByDoctor = id => async dispatch => {

    try {
        const token = checkAccessTokenPresent();

        await receptionAPI.dropReceptionRecordByDoctor(id, token);
        const records = await receptionAPI.getAllReceptionsRecords(token);

        dispatch(setMyReceptions(records.data))
    } catch (e) {
        if (e.response.data.code === customErrors[4012].code) {
            dispatch(refreshUserToken());
            dispatch(deleteReceptionRecordByDoctor(id))
        }
    }
};
