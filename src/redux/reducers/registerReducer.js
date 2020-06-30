import {patientAPI} from "../../api/patientAPI";
import {SET_IS_REGISTER_SUCCESS, SET_GENDERS, SET_REGISTER_LOADING} from "../../constant/actionTypes/registerAC";
import {genderAPI} from "../../api/genderAPI";
import {stopSubmit} from "redux-form";
import {customErrors} from "../../constant/customErrors/customErrors";

const initialState = {
        isRegisterSuccess: false,
        registerLoading: true,
        genders: []
    }
;

const registerReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_IS_REGISTER_SUCCESS :

            return {
                ...state,
                isRegisterSuccess: action.payload
            };

        case SET_GENDERS :

            return {
                ...state,
                genders: action.payload
            };
        case SET_REGISTER_LOADING :
            return {
                ...state,
                registerLoading: action.payload
            };

        default :
            return state

    }
};

export const setIsRegisterSuccess = payload => ({type: SET_IS_REGISTER_SUCCESS, payload});
export const setRegisterLoading = payload => ({type: SET_REGISTER_LOADING, payload});
export const setGenders = payload => ({type: SET_GENDERS, payload});


export const registerPatient = payload => async dispatch => {

    try {
        dispatch(setRegisterLoading(false));

        await patientAPI.registerPatient(payload);
        dispatch(setIsRegisterSuccess(true));
        dispatch(setRegisterLoading(true));


    } catch (e) {
        dispatch(setRegisterLoading(true));

        dispatch(stopSubmit('register', {_error: customErrors[e.response.data.code].message}))

    }

};

export const getGenders = () => async dispatch => {

    const genders = await genderAPI.getAllGenders();

    dispatch(setGenders(genders.data))
};

export default registerReducer;