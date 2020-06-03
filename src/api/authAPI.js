import axiosInstance from '../helpers/axiosInstance'
import {headersEnum as headerEnum} from "../constant/authConstant/header.enum";

export const authAPI = {

    login: async (email, password) => {

        try {

            return await axiosInstance.post(`/auth`, {email, password})

        } catch (e) {

            console.log(e.message)

        }
    },


    meInfo: async access_token => {
        try {

            return await axiosInstance.get('/auth/me', {
                headers: {

                    [headerEnum.AUTHORIZATION]: access_token
                }
            })

        } catch (e) {

            console.log(e.message)
        }
    },
    logout: access_token => {

        try {

            return axiosInstance.post(`auth/logout`, {}, {
                headers: {
                    [headerEnum.AUTHORIZATION]: access_token
                }
            })
        } catch (e) {
            console.log(e.message);
        }
    },

    changePassword: (access_token, data) => {

        try {

            return axiosInstance.put(`auth/password-change`, data, {
                headers: {
                    [headerEnum.AUTHORIZATION]: access_token
                }
            })
        } catch (e) {
            console.log(e.message);
        }
    },
    sendEmailForChangePassword: data => {
        try {
            return axiosInstance.post('auth/password-refresh', data)
        } catch (e) {
            console.log(e.message);
        }
    },
    resetPassword: (data,token) => {
        try {
            return axiosInstance.put(`auth/password-refresh/${token}`, data)
        } catch (e) {
            console.log(e.message);
        }
    }
};