import {
    SET_ERROR_MSG
} from "../../constant/actionTypes/errorAC";

const initialState = {
        errorMessage: null
    }
;
const errorReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_ERROR_MSG :
            return {
                ...state,
                errorMessage: action.payload
            };

        default :
            return state

    }
};

export const setErrorMsg = payload => ({type: SET_ERROR_MSG, payload});

export default errorReducer;