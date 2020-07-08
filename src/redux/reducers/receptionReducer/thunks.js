import {receptionAPI} from "../../../api/receptionAPI";
import {setIsReceptionLoading, setIsReceptionSuccess} from "./actions";

export const receptionPatient = data => async dispatch => {
    try {
        dispatch(setIsReceptionLoading(true));

        await receptionAPI.receptionPatientToDB(data);

        dispatch(setIsReceptionLoading(false));
        dispatch(setIsReceptionSuccess(true));

    } catch (e) {

        dispatch(setIsReceptionLoading(false));

    }
};