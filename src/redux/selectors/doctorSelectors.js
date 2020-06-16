export const getDoctorsSelector = state => {
    return state.doctorReducer.doctors
};
export const getDoctorsSpecialitiesSelector = state => {
    return state.doctorReducer.specialities
};

export const getLoadingProgressSelector = state => {
    return state.doctorReducer.isLoading
};