export const getIsRegisterSuccessSelector = state => {
    return state.registerReducer.isRegisterSuccess;
};

export const getAllGendersSelector = state => {
    return state.registerReducer.genders;
};
export const getRegisterLoadingSelector = state => {
    return state.registerReducer.registerLoading;
};