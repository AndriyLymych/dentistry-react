import {checkAccessTokenPresent} from "../../helpers/checkAccessTokenPresent";
import {adminAPI} from "../../api/adminAPI";
import {
    IS_CREATE_BY_ADMIN,
    IS_REGISTER_DOCTOR_SUCCESS,
    SET_ACTIVE_USERS, SET_BLOCKED_USERS
} from "../../constant/actionTypes/adminAC";
import {setIsRegisterSuccess} from "./registerReducer";
import {userAPI} from "../../api/userAPI";
import {setErrorMsg} from "./errorReducer";
import {customErrors} from "../../constant/customErrors/customErrors";
import {refreshUserToken} from "./refreshReducer";

const initialState = {
    isCreateByAdmin: false,
    isRegisterDoctorSuccess: false,
    activeUsers: [],
    blockedUsers: []
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
        case SET_ACTIVE_USERS:
            return {
                ...state,
                activeUsers: action.payload
            };
        case SET_BLOCKED_USERS:
            return {
                ...state,
                blockedUsers: action.payload
            };
        default :
            return state
    }
};

export const setCreateLoadingByAdmin = payload => ({type: IS_CREATE_BY_ADMIN, payload});
export const setIsRegisterDoctorSuccess = payload => ({type: IS_REGISTER_DOCTOR_SUCCESS, payload});
export const setActiveUsers = payload => ({type: SET_ACTIVE_USERS, payload});
export const setBlockedUsers = payload => ({type: SET_BLOCKED_USERS, payload});

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
            dispatch(setErrorMsg(customErrors[e.response.data.code].message));
            dispatch(refreshUserToken(e.response.data.code))

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
            dispatch(refreshUserToken(e.response.data.code));
            dispatch(refreshUserToken(e.response.data.code))

        }

    }
};

export const getActiveUsersFromDB = name => async dispatch => {

    try {

        const users = await userAPI.getAllActiveUsers(name);

        dispatch(setActiveUsers(users.data));

    } catch (e) {

    }

};
export const getBlockedUsersFromDB = name => async dispatch => {

    try {

        const users = await userAPI.getAllBlockedUsers(name);

        dispatch(setBlockedUsers(users.data));

    } catch (e) {

    }

};

export const blockUserByAdmin = id => async dispatch => {

    try {

        dispatch(setCreateLoadingByAdmin(true));

        const token = checkAccessTokenPresent();

        if (token) {
            await adminAPI.blockUser(token, id);

            const users = await userAPI.getAllActiveUsers();

            dispatch(setActiveUsers(users.data));
            dispatch(setCreateLoadingByAdmin(false));

        } else {
            dispatch(setCreateLoadingByAdmin(false));
        }
    } catch (e) {

        dispatch(setCreateLoadingByAdmin(false));

        if (e.response.data.code) {
            dispatch(refreshUserToken(e.response.data.code))

        }

    }
};

export const unlockUserByAdmin = id => async dispatch => {

    try {

        dispatch(setCreateLoadingByAdmin(true));

        const token = checkAccessTokenPresent();

        if (token) {
            await adminAPI.unlockUser(token, id);
            const users = await userAPI.getAllBlockedUsers();

            dispatch(setBlockedUsers(users.data));
            dispatch(setCreateLoadingByAdmin(false));

        } else {
            dispatch(setCreateLoadingByAdmin(false));
        }
    } catch (e) {

        dispatch(setCreateLoadingByAdmin(false));
        if (e.response.data.code) {
            dispatch(refreshUserToken(e.response.data.code))

        }
    }
};

export default adminReducer;