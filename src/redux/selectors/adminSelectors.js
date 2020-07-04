export const getIsCreateByAdmin = state => {
    return state.adminReducer.isCreateByAdmin
};
export const getIsRegisterDoctorSuccess = state => {
    return state.adminReducer.isRegisterDoctorSuccess
};
export const getActiveUsers = state => {
    return state.adminReducer.activeUsers
};

export const getBlockedUsers = state => {
    return state.adminReducer.blockedUsers
};