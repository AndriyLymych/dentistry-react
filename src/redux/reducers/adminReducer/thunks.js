import {checkAccessTokenPresent} from "../../../helpers/checkAccessTokenPresent";
import {adminAPI} from "../../../api/adminAPI";
import {customErrors} from "../../../constant/customErrors/customErrors";
import {refreshUserToken} from "../refreshReducer/thunks";
import {setIsRegisterSuccess, setRegisterErrMsg} from "../registerReducer/actions";
import {userAPI} from "../../../api/userAPI";

import {
    setActiveUsers,
    setBlockedUsers,
    setCreateLoadingByAdmin,
    setIsRegisterDoctorSuccess,
    setRegDoctorErrMsg
} from "./actions";

export const registerDoctor = data => async dispatch => {

    try {
        dispatch(setCreateLoadingByAdmin(true));

        const token = checkAccessTokenPresent();

        if (token) {

            await adminAPI.createDoctor(token, data);

            dispatch(setCreateLoadingByAdmin(false));
            dispatch(setIsRegisterDoctorSuccess(true));
            dispatch(setRegDoctorErrMsg(null))

        } else {
            dispatch(setCreateLoadingByAdmin(false))
        }
    } catch (e) {
        dispatch(setCreateLoadingByAdmin(false));

        if (e.response.data.code) {
            dispatch(setRegDoctorErrMsg(customErrors[e.response.data.code].message));

        }

        if (e.response.data.code === customErrors[4012].code) {
            dispatch(refreshUserToken());
            dispatch(registerDoctor(data))
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
            dispatch(setRegisterErrMsg(null))

        } else {
            dispatch(setCreateLoadingByAdmin(false));

        }
    } catch (e) {

        dispatch(setCreateLoadingByAdmin(false));

        if (e.response.data.code) {
            dispatch(setRegisterErrMsg(customErrors[e.response.data.code].message));

        }
        if (e.response.data.code === customErrors[4012].code) {
            dispatch(refreshUserToken());
            dispatch(registerAdmin(data))
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


        if (e.response.data.code === customErrors[4012].code) {
            dispatch(refreshUserToken());
            dispatch(blockUserByAdmin(id))
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

        if (e.response.data.code === customErrors[4012].code) {
            dispatch(refreshUserToken());
            dispatch(unlockUserByAdmin(id))
        }
    }
};