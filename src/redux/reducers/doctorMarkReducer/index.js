import {SET_DOCTOR_MARK, SET_IS_EVALUATED, SET_IS_MARK_LOADING} from "./constants";

const initialState = {
    mark: 1,
    isEvaluated: false,
    isMarkLoading: true
};

const doctorMarkReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_DOCTOR_MARK :
            return {
                ...state,
                mark: action.payload
            };
        case SET_IS_EVALUATED :
            return {
                ...state,
                isEvaluated: action.payload
            };
        case SET_IS_MARK_LOADING :
            return {
                ...state,
                isMarkLoading: action.payload
            };

        default :
            return state

    }
};

export default doctorMarkReducer;