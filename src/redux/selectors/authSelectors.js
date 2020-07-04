export const isAuthSelector = state => {
    return state.authReducer.isAuth
};

export const meInfoSelector = state => {
    return state.authReducer.me
};

export const myIDSelector = state => {
    return state.authReducer.myID
};

export const isPasswordChangedSelector = state => {
    return state.authReducer.isPasswordChanged
};
export const isProfileUpdateSelector = state => {
    return state.authReducer.isProfileUpdate
};
export const isSentMailSelector = state => {
    return state.authReducer.isSentMail
};
export const isLoadingSelector = state => {
    return state.authReducer.isLoading
};
export const isResetPasswordSelector = state => {
    return state.authReducer.isResetPassword
};
export const isRefreshLoadingSelector = state => {
    return state.authReducer.isRefreshLoading
};