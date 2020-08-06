import {checkAccessTokenPresent} from "../../../helpers/checkAccessTokenPresent";
import {authAPI} from "../../../api/authAPI";
import {refreshUserToken} from "../refreshReducer/thunks";
import {tokenEnum} from "../../../constant/authConstant/token.enum";
import {customErrors} from "../../../constant/customErrors/customErrors";
import historyRout from "../../../helpers/history";
import {adminAPI} from "../../../api/adminAPI";
import {userAPI} from "../../../api/userAPI";
import {doctorsAPI} from "../../../api/doctorsAPI";
import {
    changePasswordErrMsg, resetPasswordErrMsg, sendMailErrMsg,
    setIsAuth,
    setIsLoading,
    setIsPasswordChanged, setIsProfileUpdate,
    setIsResetPassword,
    setIsSentMail, setLoginAdminErrMsg, setLoginErrMsg, setLoginFacebookErrMsg,
    setMeDates,
    setMyID, updateDoctorPhotoErrMsg
} from "./actions";

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
        if (e.response.data.code === customErrors[4012].code) {
            dispatch(refreshUserToken(e.response.data.code));
            dispatch(getMeInfo())
        }

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
            dispatch(setLoginErrMsg(null))

        } else {
            setIsLoading(false)
        }

    } catch (e) {
        dispatch(setIsLoading(false));

        if (e.response.data.code) {
            dispatch(setLoginErrMsg(customErrors[e.response.data.code].message))

        }

    }

};

export const loginWithFacebook = () => async dispatch => {

    try {
        dispatch(setIsLoading(true));

        const authResult = await authAPI.loginFacebook();
        // console.log(authResult.data);

        localStorage.setItem(tokenEnum.access_token, authResult.data[tokenEnum.access_token]);
        localStorage.setItem(tokenEnum.refresh_token, authResult.data[tokenEnum.refresh_token]);

        const token = checkAccessTokenPresent();


        const meDates = await authAPI.meInfo(token);

        if (meDates) {
            dispatch(setMyID(meDates.data.id));
            dispatch(setMeDates(meDates.data));
            dispatch(setIsAuth(true));
            dispatch(setIsLoading(false));
            dispatch(setLoginFacebookErrMsg(null));
            historyRout.push('/login')

        } else {
            setIsLoading(false);
            historyRout.push('/login')

        }

    } catch (e) {
        dispatch(setIsLoading(false));
        console.log(e);
        //
        // if (e.response.data.code) {
        //     dispatch(setLoginFacebookErrMsg(customErrors[e.response.data.code].message))
        //
        // }

    }
};
export const loginWithGoogle = () => async dispatch => {

    try {
        dispatch(setIsLoading(true));

        const authResult = await authAPI.loginGoogle();

        localStorage.setItem(tokenEnum.access_token, authResult.data[tokenEnum.access_token]);
        localStorage.setItem(tokenEnum.refresh_token, authResult.data[tokenEnum.refresh_token]);

        const token = checkAccessTokenPresent();

        const meDates = await authAPI.meInfo(token);

        dispatch(setMyID(meDates.data.id));
        dispatch(setMeDates(meDates.data));
        dispatch(setIsAuth(true));
        dispatch(setIsLoading(false));
        dispatch(setLoginFacebookErrMsg(null));
        historyRout.push('/')


    } catch (e) {
        dispatch(setIsLoading(false));
        historyRout.push('/')
        //
        // if (e.response.data.code) {
        //     dispatch(setLoginFacebookErrMsg(customErrors[e.response.data.code].message))
        //
        // }

    }
};

export const loginFacebookUrl = () => async dispatch => {

    try {
        await authAPI.loginFacebookUrl();

    } catch (e) {
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
                dispatch(setLoginAdminErrMsg(null))
            } else {
                dispatch(setIsLoading(false))
            }


        }

    } catch (e) {
        dispatch(setIsLoading(false));

        if (e.response.data.code) {
            dispatch(setLoginAdminErrMsg(customErrors[e.response.data.code].message))

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
            dispatch(changePasswordErrMsg(null))

        } else {
            dispatch(setIsLoading(false))
        }
    } catch (e) {

        dispatch(setIsLoading(false));

        if (e.response.data.code) {

            dispatch(changePasswordErrMsg(customErrors[e.response.data.code].message));
            dispatch(refreshUserToken(e.response.data.code))

        }
    }
};

export const sendEmailForChangeForgotPassword = email => async dispatch => {

    try {
        dispatch(setIsLoading(true));

        await authAPI.sendEmailForChangePassword(email);

        dispatch(setIsSentMail(true));
        dispatch(setIsLoading(false));
        dispatch(sendMailErrMsg(null));

    } catch (e) {

        dispatch(setIsLoading(false));

        if (e.response.data.code) {

            dispatch(sendMailErrMsg(customErrors[e.response.data.code].message))

        }
    }
};

export const resetUserPassword = (data, token) => async dispatch => {
    try {
        dispatch(setIsLoading(true));

        await authAPI.resetPassword(data, token);

        dispatch(setIsLoading(false));
        dispatch(setIsResetPassword(true));
        dispatch(resetPasswordErrMsg(null));

    } catch (e) {

        dispatch(setIsLoading(false));

        if (e.response.data.code) {

            dispatch(resetPasswordErrMsg(customErrors[e.response.data.code].message))
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
        if (e.response.data.code === customErrors[4012].code) {
            dispatch(refreshUserToken(e.response.data.code))
            await updateUserDates(data)
        }
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
            dispatch(updateDoctorPhotoErrMsg(null));
            dispatch(setIsProfileUpdate(true));

        } else {
            dispatch(setIsProfileUpdate(true))
        }

    } catch (e) {

        dispatch(setIsProfileUpdate(true));

        if (e.response.data.code) {

            dispatch(updateDoctorPhotoErrMsg(customErrors[e.response.data.code].message));
            dispatch(refreshUserToken(e.response.data.code))
        }
    }
};