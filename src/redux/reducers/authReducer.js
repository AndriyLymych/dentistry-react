import {authAPI} from "../../api/authAPI";

import {

    SET_IS_AUTH, SET_IS_LOADING,
    SET_IS_PASSWORD_CHANGED, SET_IS_PROFILE_UPDATE, SET_IS_RESET_PASSWORD, SET_IS_SENT_MAIL,
    SET_ME_INFO,
    SET_MY_ID
} from "../../constant/actionTypes/authAC";
import {tokenEnum} from "../../constant/authConstant/token.enum";
import {checkAccessTokenPresent} from "../../helpers/checkAccessTokenPresent";
import {userAPI} from "../../api/userAPI";
import {doctorsAPI} from "../../api/doctorsAPI";
import {adminAPI} from "../../api/adminAPI";
import {customErrors} from "../../constant/customErrors/customErrors";
import {setErrorMsg} from "./errorReducer";


const initialState = {
    myID: null,
    me: null,
    isAuth: false,
    isPasswordChanged: false,
    isProfileUpdate: true,
    isSentMail: false,
    isLoading: false,
    isResetPassword: false
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
        default :
            return state

    }
};

const setMeDates = payload => ({type: SET_ME_INFO, payload});
const setMyID = payload => ({type: SET_MY_ID, payload});
const setIsAuth = payload => ({type: SET_IS_AUTH, payload});
const setIsPasswordChanged = payload => ({type: SET_IS_PASSWORD_CHANGED, payload});
const setIsProfileUpdate = payload => ({type: SET_IS_PROFILE_UPDATE, payload});
const setIsSentMail = payload => ({type: SET_IS_SENT_MAIL, payload});
const setIsLoading = payload => ({type: SET_IS_LOADING, payload});
const setIsResetPassword = payload => ({type: SET_IS_RESET_PASSWORD, payload});

export const getMeInfo = () => async dispatch => {

    try {

        dispatch(setIsLoading(true));
        const token = checkAccessTokenPresent();

        if (token) {

            const meDates = await authAPI.meInfo(token);

            dispatch(setMeDates(meDates.data));
            dispatch(setMyID(meDates.data.id));
            dispatch(setIsAuth(true));
            dispatch(setIsLoading(false))

        } else {
            dispatch(setIsLoading(false))

        }
    } catch (e) {
        dispatch(setIsLoading(false));

    }
};

export const login = (email, password) => async dispatch => {

    try {

        dispatch(setIsLoading(true));

        const authResult = await authAPI.login(email, password);


        localStorage.setItem(tokenEnum.access_token, authResult.data[tokenEnum.access_token]);
        localStorage.setItem(tokenEnum.refresh_token, authResult.data[tokenEnum.refresh_token]);

        const token = checkAccessTokenPresent();


        const meDates = await authAPI.meInfo(token);

        if (meDates) {
            dispatch(setMyID(meDates.data.id));
            dispatch(setMeDates(meDates.data));
            dispatch(setIsAuth(true));
            dispatch(setIsLoading(false));
            dispatch(setErrorMsg(null))

        } else {
            setIsLoading(false)
        }

    } catch (e) {
        dispatch(setIsLoading(false));

        if (e.response.data.code) {
            dispatch(setErrorMsg(customErrors[e.response.data.code].message))

        }

    }

};

export const loginAdmin = (email, password) => async dispatch => {

    try {
        dispatch(setIsLoading(true));

        const authData = await adminAPI.authAdmin(email, password);

        if (authData) {

            localStorage.setItem(tokenEnum.access_token, authData.data[tokenEnum.access_token]);
            localStorage.setItem(tokenEnum.refresh_token, authData.data[tokenEnum.refresh_token]);

            const token = checkAccessTokenPresent();

            const meDates = await adminAPI.adminInfo(token);

            if (meDates) {
                dispatch(setMyID(meDates.data.id));
                dispatch(setMeDates(meDates.data));
                dispatch(setIsAuth(true));
                dispatch(setIsLoading(false));
                dispatch(setErrorMsg(null))
            } else {
                dispatch(setIsLoading(false))
            }


        }

    } catch (e) {
        dispatch(setIsLoading(false));

        if (e.response.data.code) {
            dispatch(setErrorMsg(customErrors[e.response.data.code].message))

        }
    }


};

export const logout = () => async dispatch => {

    try {

        const token = checkAccessTokenPresent();

        await authAPI.logout(token);

        localStorage.removeItem(tokenEnum.access_token);
        localStorage.removeItem(tokenEnum.refresh_token);

        dispatch(setIsAuth(false));

        dispatch(setMeDates(null));


    } catch (e) {
        console.log(e);
    }


};

export const changeUserPassword = data => async dispatch => {
    try {
        dispatch(setIsLoading(true));

        const token = checkAccessTokenPresent();

        if (token) {
            await authAPI.changePassword(token, data);

            dispatch(setIsPasswordChanged(true));
            dispatch(setIsLoading(false));
            dispatch(setErrorMsg(null))

        } else {
            dispatch(setIsLoading(false))
        }
    } catch (e) {

        dispatch(setIsLoading(false));

        if (e.response.data.code) {

            dispatch(setErrorMsg(customErrors[e.response.data.code].message))

        }
    }
};

export const sendEmailForChangeForgotPassword = email => async dispatch => {

    try {
        dispatch(setIsLoading(true));

        await authAPI.sendEmailForChangePassword(email);

        dispatch(setIsSentMail(true));
        dispatch(setIsLoading(false));
        dispatch(setErrorMsg(null));

    } catch (e) {

        dispatch(setIsLoading(false));

        if (e.response.data.code) {

            dispatch(setErrorMsg(customErrors[e.response.data.code].message))

        }
    }
};

export const resetUserPassword = (data, token) => async dispatch => {
    try {
        dispatch(setIsLoading(true));

        await authAPI.resetPassword(data, token);

        dispatch(setIsResetPassword(true));
        dispatch(setIsLoading(false));
        dispatch(setErrorMsg(null));

    } catch (e) {

        dispatch(setIsLoading(false));

        if (e.response.data.code) {

            dispatch(setErrorMsg(customErrors[e.response.data.code].message))
        }
    }

};

export const updateUserDates = data => async dispatch => {
    try {
        dispatch(setIsProfileUpdate(false));

        const token = checkAccessTokenPresent();

        if (token) {

            await userAPI.updateProfileInfo(token, data);

            const meDates = await authAPI.meInfo(token);

            dispatch(setMeDates(meDates.data));

            dispatch(setIsProfileUpdate(true))

        } else {
            dispatch(setIsProfileUpdate(true));
        }


    } catch (e) {
        dispatch(setIsProfileUpdate(true));

    }
};

export const updateDoctorProfilePhoto = avatar => async dispatch => {

    try {
        dispatch(setIsProfileUpdate(false));

        const token = checkAccessTokenPresent();

        if (token) {

            await doctorsAPI.updateDoctorAvatar(avatar, token);

            const meDates = await authAPI.meInfo(token);

            dispatch(setMeDates(meDates.data));
            dispatch(setErrorMsg(null));
            dispatch(setIsProfileUpdate(true));

        } else {
            dispatch(setIsProfileUpdate(true))
        }


    } catch (e) {

        dispatch(setIsProfileUpdate(true));

        if (e.response.data.code) {

            dispatch(setErrorMsg(customErrors[e.response.data.code].message))

        }
    }
};

export default authReducer