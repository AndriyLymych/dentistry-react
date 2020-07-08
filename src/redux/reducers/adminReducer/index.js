import {
    IS_CREATE_BY_ADMIN,
    IS_REGISTER_DOCTOR_SUCCESS,
    SET_ACTIVE_USERS,
    SET_BLOCKED_USERS,
    SET_REG_ADMIN_ERR_MSG,
    SET_REG_DOCTOR_ERR_MSG
} from "./constants";

const initialState = {
    isCreateByAdmin: false,
    isRegisterDoctorSuccess: false,
    activeUsers: [],
    blockedUsers: [],
    registerDoctorErrMsg: null,
    registerAdminErrMsg: null
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_CREATE_BY_ADMIN:
            return {
                ...state,
                isCreateByAdmin: action.payload
            };
        case IS_REGISTER_DOCTOR_SUCCESS:
            return {
                ...state,
                isRegisterDoctorSuccess: action.payload
            };
        case SET_ACTIVE_USERS:
            return {
                ...state,
                activeUsers: action.payload
            };
        case SET_BLOCKED_USERS:
            return {
                ...state,
                blockedUsers: action.payload
            };
        case SET_REG_DOCTOR_ERR_MSG:
            return {
                ...state,
                registerDoctorErrMsg: action.payload
            };
        case SET_REG_ADMIN_ERR_MSG:
            return {
                ...state,
                registerAdminErrMsg: action.payload
            };
        default :
            return state
    }
};


export default adminReducer;