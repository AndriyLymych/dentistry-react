import {SET_AUTH_DATE} from "../../redux/reducers/authReducer";

export const setAuthDates = (id, access_token, refresh_token, isAuth) => ({
    type: SET_AUTH_DATE, payload: {id, access_token, refresh_token, isAuth}
});