export const getDoctorsSelector = state => {
    return state.doctorReducer.doctors
};

export const getLoadingProgressSelector = state => {
    return state.doctorReducer.isLoading
};