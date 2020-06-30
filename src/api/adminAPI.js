import axiosInstance from '../helpers/axiosInstance'
import {headersEnum as headerEnum} from "../constant/authConstant/header.enum";

export const adminAPI = {

    authAdmin: (email, password) => {

        return axiosInstance.post(`/admin/auth`, {email, password})

    },


    adminInfo: access_token => {

        return axiosInstance.get('/admin/auth/me', {
            headers: {

                [headerEnum.AUTHORIZATION]: access_token
            }
        })
    },
    createDoctor: (access_token, data) => {

        return axiosInstance.post('/admin/create-doctor', data, {
            headers: {

                [headerEnum.AUTHORIZATION]: access_token
            }
        })

    },
    createAdmin: (access_token, data) => {

        return axiosInstance.post('/admin', data, {
            headers: {

                [headerEnum.AUTHORIZATION]: access_token
            }
        })

    },

};