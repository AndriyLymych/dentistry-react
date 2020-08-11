import {customErrors} from "../../../constant/customErrors/customErrors";
import {checkRefreshTokenPresent} from "../../../helpers/checkRefreshTokenPresent";
import {authAPI} from "../../../api/authAPI";
import {tokenEnum} from "../../../constant/authConstant/token.enum";
import {checkAccessTokenPresent} from "../../../helpers/checkAccessTokenPresent";
import {setIsAuth, setMeDates, setMyID} from "../authReducer/actions";
import historyRout from "../../../helpers/history";
import {setRefreshLoading} from "./actions";

export const refreshUserToken = () => async dispatch => {

    try {
        dispatch(setRefreshLoading(true));


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

    } catch (e) {
        if (e.response.data.code && e.response.data.code === customErrors[4013].code) {
            dispatch(setRefreshLoading(false));

            localStorage.removeItem(tokenEnum.access_token);
            localStorage.removeItem(tokenEnum.refresh_token);
            dispatch(setIsAuth(false));
            dispatch(setMeDates(null));
            historyRout.push('/login')
        }
    }

};
