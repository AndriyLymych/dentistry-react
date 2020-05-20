export const isLoadingProfileSelector = state => {
    return state.serviceProfileReducer.isLoading
};

export const serviceProfileSelector = state => {
    return state.serviceProfileReducer.serviceProfile
};