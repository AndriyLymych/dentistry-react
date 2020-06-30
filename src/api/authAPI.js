import axiosInstance from '../helpers/axiosInstance'
import {headersEnum as headerEnum} from "../constant/authConstant/header.enum";

export const authAPI = {

    login: (email, password) => {

        return axiosInstance.post(`/auth`, {email, password})

    },


    meInfo: access_token => {

        return axiosInstance.get('/auth/me', {
            headers: {

                [headerEnum.AUTHORIZATION]: access_token
            }
        })

    },


    logout: access_token => {

        return axiosInstance.post(`auth/logout`, {}, {
            headers: {
                [headerEnum.AUTHORIZATION]: access_token
            }
        })
    },

    changePassword: (access_token, data) => {

        return axiosInstance.put(`auth/password-change`, data, {
            headers: {
                [headerEnum.AUTHORIZATION]: access_token
            }
        })
    },
    sendEmailForChangePassword: data => {

        return axiosInstance.post('auth/password-refresh', data)

    },
    resetPassword: (data, token) => {

        return axiosInstance.put(`auth/password-refresh/${token}`, data)

    }
};