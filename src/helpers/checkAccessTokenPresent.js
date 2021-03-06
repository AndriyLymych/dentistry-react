import {tokenEnum} from '../constant/authConstant/token.enum'

export const checkAccessTokenPresent = () => {
    const token = localStorage.getItem(tokenEnum.access_token);

    if (!token) {
        return  false
    }

    return token
};