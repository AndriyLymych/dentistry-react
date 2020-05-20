import {authAPI} from "../../api/authAPI";
import {stopSubmit} from "redux-form";
import {SET_IS_AUTH, SET_ME_INFO} from "../../constant/actionTypes/authAC";
import {tokenEnum} from "../../constant/authConstant/token.enum";
import {checkAccessTokenPresent} from "../../helpers/checkAccessTokenPresent";


const initialState = {
    me: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_ME_INFO :

            return {
                ...state,
                me: action.payload
            };

        case SET_IS_AUTH :
            return {
                ...state,
                isAuth: action.payload
            };


        default :
            return state

    }
};

const setMeDates = payload => ({type: SET_ME_INFO, payload});
const setIsAuth = payload => ({type: SET_IS_AUTH, payload});

export const getMeInfo = () => async dispatch => {
    const token = checkAccessTokenPresent();

    if (token) {

        const meDates = await authAPI.meInfo(token);

        dispatch(setMeDates(meDates.data));
        dispatch(setIsAuth(true));

    } else {
        console.log('no token')
    }
};

export const login = (email, password) => async dispatch => {

    const authResult = await authAPI.login(email, password);

    localStorage.setItem(tokenEnum.access_token, authResult.data[tokenEnum.access_token]);
    localStorage.setItem(tokenEnum.refresh_token, authResult.data[tokenEnum.refresh_token]);

    const token = checkAccessTokenPresent();

    if (token) {

        const meDates = await authAPI.meInfo(token);

        dispatch(setMeDates(meDates.data));
        dispatch(setIsAuth(true));

    } else {
        console.log('no token')
    }

};

export const logout = () => async dispatch => {

    const token = checkAccessTokenPresent();

    await authAPI.logout(token);

    localStorage.removeItem(tokenEnum.access_token);
    localStorage.removeItem(tokenEnum.refresh_token);

    dispatch(setMeDates(null));

    dispatch(setIsAuth(false));

};


export default authReducer