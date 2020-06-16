import {checkAccessTokenPresent} from "../../helpers/checkAccessTokenPresent";
import {adminAPI} from "../../api/adminAPI";
import {IS_CREATE_BY_ADMIN, IS_REGISTER_DOCTOR_SUCCESS} from "../../constant/actionTypes/adminAC";
import {setIsRegisterSuccess} from "./registerReducer";

const initialState = {
    isCreateByAdmin: false,
    isRegisterDoctorSuccess: false
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_CREATE_BY_ADMIN:
            return {
                ...state,
                isCreateByAdmin: action.payload
            };
        case IS_REGISTER_DOCTOR_SUCCESS:
            return {
                ...state,
                isRegisterDoctorSuccess: action.payload
            };
        default :
            return state
    }
};

export const setCreateLoadingByAdmin = payload => ({type: IS_CREATE_BY_ADMIN, payload});
export const setIsRegisterDoctorSuccess = payload => ({type: IS_REGISTER_DOCTOR_SUCCESS, payload});

export const registerDoctor = data => async dispatch => {

    dispatch(setCreateLoadingByAdmin(true));

    const token = checkAccessTokenPresent();

    if (token) {

        await adminAPI.createDoctor(token, data);

        dispatch(setCreateLoadingByAdmin(false));

        dispatch(setIsRegisterDoctorSuccess(true));


    }
};

export const registerAdmin = data => async dispatch => {

    dispatch(setCreateLoadingByAdmin(true));

    const token = checkAccessTokenPresent();

    if (token) {
        await adminAPI.createAdmin(token, data);

        dispatch(setCreateLoadingByAdmin(false));
        dispatch(setIsRegisterSuccess(true));

    }
};

export default adminReducer;