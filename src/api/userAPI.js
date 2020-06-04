import axiosInstance from '../helpers/axiosInstance'
import {headersEnum as headerEnum} from "../constant/authConstant/header.enum";

export const userAPI = {

    updateProfileInfo: (access_token,data) => {

        try {

            return axiosInstance.put(`/users/update-profile`, data,{
                headers: {
                    [headerEnum.AUTHORIZATION]: access_token
                }
            })
        } catch (e) {
            console.log(e.message);
        }
    }
};