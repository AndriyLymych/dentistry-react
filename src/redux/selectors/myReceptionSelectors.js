export const getMyReceptionsSelector = state => {
    return state.myReceptionReducer.receptions
};

export const getLoadingReceptionsProgressSelector = state => {
    return state.myReceptionReducer.isLoading
};