import {SET_IS_REGISTER_SUCCESS, SET_GENDERS, SET_REGISTER_LOADING, SET_REGISTER_ERR_MSG} from "./constants";

const initialState = {
    isRegisterSuccess: false,
    registerLoading: true,
    genders: [],
    registerErrMsg: null
};

const registerReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_IS_REGISTER_SUCCESS :

            return {
                ...state,
                isRegisterSuccess: action.payload
            };

        case SET_GENDERS :

            return {
                ...state,
                genders: action.payload
            };
        case SET_REGISTER_LOADING :
            return {
                ...state,
                registerLoading: action.payload
            };
        case SET_REGISTER_ERR_MSG :
            return {
                ...state,
                registerErrMsg: action.payload
            };

        default :
            return state

    }
};

export default registerReducer;