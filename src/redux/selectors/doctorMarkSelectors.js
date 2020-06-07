export const isEvaluated = state => {
    return state.doctorMarkReducer.isEvaluated
};

export const getDoctorMark = state => {
    return state.doctorMarkReducer.mark
};
export const isMarkLoading = state => {
    return state.doctorMarkReducer.isMarkLoading
};