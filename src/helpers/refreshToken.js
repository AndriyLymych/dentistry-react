import {customErrors} from "../constant/customErrors/customErrors";
import {authAPI} from "../api/authAPI";
import {checkRefreshTokenPresent} from "./checkRefreshTokenPresent";

export const refreshToken = async (errCode) => {

    const refreshToken = checkRefreshTokenPresent();

    if (errCode === customErrors[4012].code) {
        await authAPI.refreshToken(refreshToken);
        if (errCode === customErrors[4013].code) {
            window.location.history.push('/login')
            console.log('12safasfasf');
        }
    }


};