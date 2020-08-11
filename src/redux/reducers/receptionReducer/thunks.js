import {receptionAPI} from "../../../api/receptionAPI";
import {setIsReceptionLoading, setIsReceptionSuccess} from "./actions";
import {customErrors} from "../../../constant/customErrors/customErrors";
import {refreshUserToken} from "../refreshReducer/thunks";

export const receptionPatient = data => async dispatch => {
    try {
        dispatch(setIsReceptionLoading(true));

        await receptionAPI.receptionPatientToDB(data);

        dispatch(setIsReceptionSuccess(true));
        dispatch(setIsReceptionLoading(false));


    } catch (e) {

        dispatch(setIsReceptionLoading(false));
        if (e.response.data.code === customErrors[4012].code) {
            dispatch(refreshUserToken());
            dispatch(receptionPatient(data))
        }
    }
};