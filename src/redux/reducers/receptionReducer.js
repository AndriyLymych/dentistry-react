import {SET_IS_RECEPTION_LOADING, SET_IS_RECEPTION_SUCCESS} from "../../constant/actionTypes/receptionAC";
import {receptionAPI} from "../../api/receptionAPI";

const initialState = {
    isReceptionSuccess: false,
    isReceptionLoading: false

};

const receptionReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_IS_RECEPTION_SUCCESS :

            return {
                ...state,
                isReceptionSuccess: action.payload
            };

        case SET_IS_RECEPTION_LOADING :

            return {
                ...state,
                isReceptionLoading: action.payload
            };

        default :
            return state

    }
};

export const setIsReceptionSuccess = payload => ({type: SET_IS_RECEPTION_SUCCESS, payload});
export const setIsReceptionLoading = payload => ({type: SET_IS_RECEPTION_LOADING, payload});


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


export default receptionReducer;