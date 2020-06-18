export const getServicesSelector = state => {
    return state.serviceReducer.services
};

export const getLoadingProgressSelector = state => {
    return state.serviceReducer.isLoading
};

export const getIsServiceDeletedSelector = state => {
    return state.serviceReducer.isDeleted
};

export const getIsServiceWorkDoneSelector = state => {
    return state.serviceReducer.isServiceWorkDone
};