export const isAuthSelector = state => {
    return state.authReducer.isAuth
};

export const meInfoSelector = state => {
    return state.authReducer.me
};