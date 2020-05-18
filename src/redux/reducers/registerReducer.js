import {patientAPI} from "../../api/patientAPI";
import {SET_IS_REGISTER_SUCCESS, SET_GENDERS} from "../../constant/actionTypes/registerAC";
import {genderAPI} from "../../api/genderAPI";

const initialState = {
    isRegisterSuccess: false,
    genders: []
};

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


        default :
            return state

    }
};

export const setIsRegisterSuccess = payload => ({type: SET_IS_REGISTER_SUCCESS, payload});

export const setGenders = payload => ({type: SET_GENDERS, payload});


export const registerPatient = payload => async dispatch => {

    await patientAPI.registerPatient(payload);

    dispatch(setIsRegisterSuccess(true));

};

export const getGenders = () => async dispatch => {

    const genders = await genderAPI.getAllGenders();

    dispatch(setGenders(genders.data))
};

export default registerReducer;