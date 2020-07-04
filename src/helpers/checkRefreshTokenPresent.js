import {tokenEnum} from '../constant/authConstant/token.enum'

export const checkRefreshTokenPresent = () => {
    const token = localStorage.getItem(tokenEnum.refresh_token);

    if (!token) {
        return  false
    }

    return token
};