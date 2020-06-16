import {authAPI} from "../../api/authAPI";
import {stopSubmit} from "redux-form";

import {
    SET_IS_AUTH,
    SET_IS_PASSWORD_CHANGED, SET_IS_PROFILE_UPDATE,
    SET_ME_INFO,
    SET_MY_ID
} from "../../constant/actionTypes/authAC";
import {tokenEnum} from "../../constant/authConstant/token.enum";
import {checkAccessTokenPresent} from "../../helpers/checkAccessTokenPresent";
import {userAPI} from "../../api/userAPI";
import {doctorsAPI} from "../../api/doctorsAPI";
import {adminAPI} from "../../api/adminAPI";


const initialState = {
    myID: null,
    me: null,
    isAuth: false,
    isPasswordChanged: false,
    isProfileUpdate: true
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


        default :
            return state

    }
};

const setMeDates = payload => ({type: SET_ME_INFO, payload});
const setMyID = payload => ({type: SET_MY_ID, payload});
const setIsAuth = payload => ({type: SET_IS_AUTH, payload});
const setIsPasswordChanged = payload => ({type: SET_IS_PASSWORD_CHANGED, payload});
const setIsProfileUpdate = payload => ({type: SET_IS_PROFILE_UPDATE, payload});

export const getMeInfo = () => async dispatch => {

    const token = checkAccessTokenPresent();

    if (token) {

        const meDates = await authAPI.meInfo(token);

        dispatch(setMeDates(meDates.data));
        dispatch(setMyID(meDates.data.id));
        dispatch(setIsAuth(true));

    } else {
        console.log('no token')
    }
};

export const login = (email, password) => async dispatch => {

    const authResult = await authAPI.login(email, password);

    if (authResult) {

        localStorage.setItem(tokenEnum.access_token, authResult.data[tokenEnum.access_token]);
        localStorage.setItem(tokenEnum.refresh_token, authResult.data[tokenEnum.refresh_token]);
        const token = checkAccessTokenPresent();

        //TODO при частій логінації meDates === undefined

        const meDates = await authAPI.meInfo(token);

        dispatch(setMyID(meDates.data.id));
        dispatch(setMeDates(meDates.data));
        dispatch(setIsAuth(true));
    }
};

export const loginAdmin = (email, password) => async dispatch => {

    const authData = await adminAPI.authAdmin(email, password);

    if (authData) {

        localStorage.setItem(tokenEnum.access_token, authData.data[tokenEnum.access_token]);
        localStorage.setItem(tokenEnum.refresh_token, authData.data[tokenEnum.refresh_token]);

        const token = checkAccessTokenPresent();

        const meDates = await adminAPI.adminInfo(token);

        dispatch(setMyID(meDates.data.id));
        dispatch(setMeDates(meDates.data));
        dispatch(setIsAuth(true));
    }
};

export const logout = () => async dispatch => {

    const token = checkAccessTokenPresent();

    await authAPI.logout(token);

    localStorage.removeItem(tokenEnum.access_token);
    localStorage.removeItem(tokenEnum.refresh_token);

    dispatch(setIsAuth(false));

    dispatch(setMeDates(null));


};

export const changeUserPassword = data => async dispatch => {

    const token = checkAccessTokenPresent();

    if (token) {
        await authAPI.changePassword(token, data);

        dispatch(setIsPasswordChanged(true));
    } else {
        console.log('no token');
    }
};

export const sendEmailForChangeForgotPassword = email => async () => {

    await authAPI.sendEmailForChangePassword(email);

};

export const resetUserPassword = (data, token) => async () => {

    await authAPI.resetPassword(data, token);

};

export const updateUserDates = data => async dispatch => {

    dispatch(setIsProfileUpdate(false));

    const token = checkAccessTokenPresent();

    if (token) {

        await userAPI.updateProfileInfo(token, data);

        const meDates = await authAPI.meInfo(token);

        dispatch(setMeDates(meDates.data));

        dispatch(setIsProfileUpdate(true))

    } else {
        console.log('no token');
    }


};

export const updateDoctorProfilePhoto = avatar => async dispatch => {

    dispatch(setIsProfileUpdate(false));

    const token = checkAccessTokenPresent();

    if (token) {

        await doctorsAPI.updateDoctorAvatar(avatar, token);

        const meDates = await authAPI.meInfo(token);

        dispatch(setMeDates(meDates.data));

        dispatch(setIsProfileUpdate(true))

    } else {
        console.log('no token');
    }


};

export default authReducer