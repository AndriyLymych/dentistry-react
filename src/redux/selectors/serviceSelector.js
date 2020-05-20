export const getServicesSelector = state => {
    return state.serviceReducer.services
};

export const getLoadingProgressSelector = state => {
    return state.serviceReducer.isLoading
};