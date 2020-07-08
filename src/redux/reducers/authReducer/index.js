import {
    CHANGE_PASSWORD_ERR_MSG, RESET_PASSWORD_ERR_MSG, SEND_MAIL_ERR_MSG,

    SET_IS_AUTH,
    SET_IS_LOADING,
    SET_IS_PASSWORD_CHANGED,
    SET_IS_PROFILE_UPDATE,
    SET_IS_RESET_PASSWORD,
    SET_IS_SENT_MAIL, SET_LOGIN_ADMIN_ERR_MSG,
    SET_LOGIN_ERR_MSG,
    SET_LOGIN_FACEBOOK_ERR_MSG,
    SET_ME_INFO,
    SET_MY_ID, UPDATE_DOCTOR_PHOTO_ERR_MSG
} from "./constants";

const initialState = {
    myID: null,
    me: null,
    isAuth: false,
    isPasswordChanged: false,
    isProfileUpdate: true,
    isSentMail: false,
    isLoading: false,
    isResetPassword: false,
    loginErrMsg: null,
    loginFacebookErrMsg: null,
    loginAdminErrMsg: null,
    changePasswordErrMsg: null,
    sendMailErrMsg: null,
    resetPasswordErrMsg: null,
    updateDoctorPhotoErrMsg: null,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_ME_INFO :

            return {
                ...state,
                me: action.payload
            };
        case SET_MY_ID :

            return {
                ...state,
                myID: action.payload
            };

        case SET_IS_AUTH :
            return {
                ...state,
                isAuth: action.payload
            };

        case SET_IS_PASSWORD_CHANGED :
            return {
                ...state,
                isPasswordChanged: action.payload
            };

        case SET_IS_PROFILE_UPDATE :
            return {
                ...state,
                isProfileUpdate: action.payload
            };

        case SET_IS_SENT_MAIL :
            return {
                ...state,
                isSentMail: action.payload
            };

        case SET_IS_LOADING :
            return {
                ...state,
                isLoading: action.payload
            };
        case SET_IS_RESET_PASSWORD :
            return {
                ...state,
                isResetPassword: action.payload
            };
        case SET_LOGIN_ERR_MSG :
            return {
                ...state,
                loginErrMsg: action.payload
            };
        case SET_LOGIN_FACEBOOK_ERR_MSG :
            return {
                ...state,
                loginFacebookErrMsg: action.payload
            };
        case SET_LOGIN_ADMIN_ERR_MSG :
            return {
                ...state,
                loginAdminErrMsg: action.payload
            };
        case CHANGE_PASSWORD_ERR_MSG :
            return {
                ...state,
                changePasswordErrMsg: action.payload
            };
        case SEND_MAIL_ERR_MSG :
            return {
                ...state,
                sendMailErrMsg: action.payload
            };
        case RESET_PASSWORD_ERR_MSG :
            return {
                ...state,
                sendMailErrMsg: action.payload
            };
        case UPDATE_DOCTOR_PHOTO_ERR_MSG :
            return {
                ...state,
                sendMailErrMsg: action.payload
            };
        default :
            return state

    }
};

export default authReducer