import {
    IS_CREATE_BY_ADMIN,
    IS_REGISTER_DOCTOR_SUCCESS,
    SET_ACTIVE_USERS,
    SET_BLOCKED_USERS, 
    SET_REG_ADMIN_ERR_MSG, 
    SET_REG_DOCTOR_ERR_MSG
} from "./constants";

export const setCreateLoadingByAdmin = payload => ({type: IS_CREATE_BY_ADMIN, payload});
export const setIsRegisterDoctorSuccess = payload => ({type: IS_REGISTER_DOCTOR_SUCCESS, payload});
export const setActiveUsers = payload => ({type: SET_ACTIVE_USERS, payload});
export const setBlockedUsers = payload => ({type: SET_BLOCKED_USERS, payload});
export const setRegDoctorErrMsg = payload => ({type: SET_REG_DOCTOR_ERR_MSG, payload});
export const setRegAdminErrMsg = payload => ({type: SET_REG_ADMIN_ERR_MSG, payload});