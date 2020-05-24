import {patientAPI} from "../../api/patientAPI";
import {SET_IS_RECEPTION_SUCCESS} from "../../constant/actionTypes/receptionAC";
import {receptionAPI} from "../../api/receptionAPI";

const initialState = {
    isReceptionSuccess: false,

};

const receptionReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_IS_RECEPTION_SUCCESS :

            return {
                ...state,
                isReceptionSuccess: action.payload
            };


        default :
            return state

    }
};

export const setIsReceptionSuccess = payload => ({type: SET_IS_RECEPTION_SUCCESS, payload});


export const receptionPatient = data => async dispatch => {


    await receptionAPI.receptionPatientToDB(data);

    dispatch(setIsReceptionSuccess(true));

};


export default receptionReducer;