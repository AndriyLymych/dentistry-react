import {
    CHANGE_PASSWORD_ERR_MSG, RESET_PASSWORD_ERR_MSG,
    SEND_MAIL_ERR_MSG,
    SET_IS_AUTH, SET_IS_LOADING,
    SET_IS_PASSWORD_CHANGED,
    SET_IS_PROFILE_UPDATE,
    SET_IS_RESET_PASSWORD,
    SET_IS_SENT_MAIL,
    SET_LOGIN_ADMIN_ERR_MSG,
    SET_LOGIN_ERR_MSG,
    SET_LOGIN_FACEBOOK_ERR_MSG,
    SET_ME_INFO,
    SET_MY_ID, UPDATE_DOCTOR_PHOTO_ERR_MSG
} from "./constants";

export const setMeDates = payload => ({type: SET_ME_INFO, payload});
export const setMyID = payload => ({type: SET_MY_ID, payload});
export const setIsAuth = payload => ({type: SET_IS_AUTH, payload});
export const setIsPasswordChanged = payload => ({type: SET_IS_PASSWORD_CHANGED, payload});
export const setIsProfileUpdate = payload => ({type: SET_IS_PROFILE_UPDATE, payload});
export const setIsSentMail = payload => ({type: SET_IS_SENT_MAIL, payload});
export const setIsLoading = payload => ({type: SET_IS_LOADING, payload});
export const setIsResetPassword = payload => ({type: SET_IS_RESET_PASSWORD, payload});
export const setLoginErrMsg = payload => ({type: SET_LOGIN_ERR_MSG, payload});
export const setLoginFacebookErrMsg = payload => ({type: SET_LOGIN_FACEBOOK_ERR_MSG, payload});
export const setLoginAdminErrMsg = payload => ({type: SET_LOGIN_ADMIN_ERR_MSG, payload});
export const changePasswordErrMsg = payload => ({type: CHANGE_PASSWORD_ERR_MSG, payload});
export const sendMailErrMsg = payload => ({type: SEND_MAIL_ERR_MSG, payload});
export const resetPasswordErrMsg = payload => ({type: RESET_PASSWORD_ERR_MSG, payload});
export const updateDoctorPhotoErrMsg = payload => ({type: UPDATE_DOCTOR_PHOTO_ERR_MSG, payload});