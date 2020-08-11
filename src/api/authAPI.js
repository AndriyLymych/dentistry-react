import axiosInstance from '../helpers/axiosInstance'
import {headersEnum as headerEnum} from "../constant/authConstant/header.enum";
import {HTTP_OPTIONS} from "../helpers/httpHeaders";

export const authAPI = {

    login: (email, password) => {

        return axiosInstance.post(`/auth`, {email, password})

    },
    loginFacebook: () => {
        return axiosInstance.get(`/auth/facebook/callback`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })

    },
    loginGoogle: () => {
        return axiosInstance.get(`/auth/google/callback`)
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

    },
    refreshToken: (refresh_token) => {

        return axiosInstance.post(`auth/refresh`, {}, {
            headers: {
                [headerEnum.AUTHORIZATION]: refresh_token
            }
        })

    }
};