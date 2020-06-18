import {USER_STATUS} from "../../constant/userConstant/userStatus";

export const getIsCreateByAdmin = state => {
    return state.adminReducer.isCreateByAdmin
};
export const getIsRegisterDoctorSuccess = state => {
    return state.adminReducer.isRegisterDoctorSuccess
};
export const getActiveUsers = state => {
    return state.adminReducer.users.filter(user => user['UserStatus.label'] === USER_STATUS.ACTIVE)
};

export const getBlockedUsers = state => {
    return state.adminReducer.users.filter(user => user.UserStatus.label === USER_STATUS.BLOCKED)
};