import {checkAccessTokenPresent} from "../../helpers/checkAccessTokenPresent";
import {adminAPI} from "../../api/adminAPI";
import {IS_CREATE_BY_ADMIN, IS_REGISTER_DOCTOR_SUCCESS, SET_USERS} from "../../constant/actionTypes/adminAC";
import {setIsRegisterSuccess} from "./registerReducer";
import {userAPI} from "../../api/userAPI";
import {setErrorMsg} from "./errorReducer";
import {customErrors} from "../../constant/customErrors/customErrors";

const initialState = {
    isCreateByAdmin: false,
    isRegisterDoctorSuccess: false,
    users: []
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
        case SET_USERS:
            return {
                ...state,
                users: action.payload
            };
        default :
            return state
    }
};

export const setCreateLoadingByAdmin = payload => ({type: IS_CREATE_BY_ADMIN, payload});
export const setIsRegisterDoctorSuccess = payload => ({type: IS_REGISTER_DOCTOR_SUCCESS, payload});
export const setUsers = payload => ({type: SET_USERS, payload});

export const registerDoctor = data => async dispatch => {

    try {
        dispatch(setCreateLoadingByAdmin(true));

        const token = checkAccessTokenPresent();

        if (token) {

            await adminAPI.createDoctor(token, data);

            dispatch(setCreateLoadingByAdmin(false));
            dispatch(setIsRegisterDoctorSuccess(true));
            dispatch(setErrorMsg(null))

        } else {
            dispatch(setCreateLoadingByAdmin(false))
        }
    } catch (e) {
        dispatch(setCreateLoadingByAdmin(false));

        if (e.response.data.code) {
            dispatch(setErrorMsg(customErrors[e.response.data.code].message))

        }
    }
};

export const registerAdmin = data => async dispatch => {

    try {

        dispatch(setCreateLoadingByAdmin(true));

        const token = checkAccessTokenPresent();

        if (token) {
            await adminAPI.createAdmin(token, data);

            dispatch(setCreateLoadingByAdmin(false));
            dispatch(setIsRegisterSuccess(true));
            dispatch(setErrorMsg(null))

        } else {
            dispatch(setCreateLoadingByAdmin(false));
        }
    } catch (e) {

        dispatch(setCreateLoadingByAdmin(false));

        if (e.response.data.code) {
            dispatch(setErrorMsg(customErrors[e.response.data.code].message))

        }
    }
};

export const getUsers = name => async dispatch => {

    try {
        dispatch(setCreateLoadingByAdmin(true));

        const users = await userAPI.getAllUsers(name);

        dispatch(setUsers(users.data));
        dispatch(setCreateLoadingByAdmin(false));


    } catch (e) {
        dispatch(setCreateLoadingByAdmin(false));

    }

};

export default adminReducer;