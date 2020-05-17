import {authAPI} from "../../api/authAPI";
import {stopSubmit} from "redux-form";
import {setAuthDates} from "../../helpers/actionCreators/authAC";

export const SET_AUTH_DATE = 'dentistry-react/appReducer/set-auth-dates';

const initialState = {
    id: null,
    access_token: '',
    refresh_token: '',
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH_DATE :

            return {
                ...state,
                ...action.payload
            };


        default :
            return state

    }
};


export const login = (email, password) => async dispatch => {

    const authDates = await authAPI.login(email, password);
    console.log(authDates.data);
    dispatch(setAuthDates(authDates.data.id, authDates.data.access_token, authDates.data.refresh_token, true))

    // if (res.resultCode === 0) {
    //
    //     dispatch(setAuthDates());
    //
    // } else {
    //
    //     if (res.resultCode === 10) {
    //         dispatch(getCaptcha())
    //     }
    //     dispatch(stopSubmit('login', {_error: res.messages}))
    // }

};


export default authReducer