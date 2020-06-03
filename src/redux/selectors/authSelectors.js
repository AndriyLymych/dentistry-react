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