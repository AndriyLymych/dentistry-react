export const isLoadingProfileSelector = state => {
    return state.doctorProfileReducer.isLoading
};

export const doctorProfileSelector = state => {
    return state.doctorProfileReducer.doctorProfile
};