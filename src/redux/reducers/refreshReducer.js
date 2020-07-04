import {checkRefreshTokenPresent} from "../../helpers/checkRefreshTokenPresent";
import {customErrors} from "../../constant/customErrors/customErrors";
import {authAPI} from "../../api/authAPI";
import {setErrorMsg} from "./errorReducer";
import {SET_IS_REFRESH_LOADING} from "../../constant/actionTypes/authAC";
import {tokenEnum} from "../../constant/authConstant/token.enum";
import {setIsAuth, setMeDates, setMyID} from "./authReducer";
import historyRout from "../../helpers/history";
import {checkAccessTokenPresent} from "../../helpers/checkAccessTokenPresent";

const initialState = {
    isRefreshLoading: false
};

const refreshReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_IS_REFRESH_LOADING :

            return {
                ...state,
                isRefreshLoading: action.payload
            };


        default :
            return state

    }
};
export const setRefreshLoading = payload => ({type: SET_IS_REFRESH_LOADING, payload});

export const refreshUserToken = errCode => async dispatch => {

    try {
        dispatch(setRefreshLoading(true));

        if (errCode === customErrors[4012].code) {
            dispatch(setErrorMsg('Помилка'));

            const refreshToken = checkRefreshTokenPresent();

            const tokens = await authAPI.refreshToken(refreshToken);

            localStorage.setItem(tokenEnum.access_token, tokens.data[tokenEnum.access_token]);
            localStorage.setItem(tokenEnum.refresh_token, tokens.data[tokenEnum.refresh_token]);

            const token = checkAccessTokenPresent();


            const meDates = await authAPI.meInfo(token);

            if (meDates) {
                dispatch(setMyID(meDates.data.id));
                dispatch(setMeDates(meDates.data));
                dispatch(setIsAuth(true));
                dispatch(setRefreshLoading(false));

            } else {
                setRefreshLoading(false);
            }
        }
    } catch (e) {
        if (e.response.data.code && e.response.data.code === customErrors[4013].code) {
            dispatch(setErrorMsg(null));
            localStorage.removeItem(tokenEnum.access_token);
            localStorage.removeItem(tokenEnum.refresh_token);
            dispatch(setIsAuth(false));
            dispatch(setMeDates(null));
            historyRout.push('/login')
        }
    }

};


export default refreshReducer