import axiosInstance from '../helpers/axiosInstance'
import {headersEnum as headerEnum} from "../constant/authConstant/header.enum";

export const adminAPI = {

    authAdmin: async (email, password) => {

        try {

            return await axiosInstance.post(`/admin/auth`, {email, password})

        } catch (e) {

            console.log(e.message)

        }
    },


    adminInfo: async access_token => {
        try {

            return await axiosInstance.get('/admin/auth/me', {
                headers: {

                    [headerEnum.AUTHORIZATION]: access_token
                }
            })

        } catch (e) {

            console.log(e.message)
        }
    },
    createDoctor: async (access_token, data) => {
        try {

            return await axiosInstance.post('/admin/create-doctor', data, {
                headers: {

                    [headerEnum.AUTHORIZATION]: access_token
                }
            })

        } catch (e) {

            console.log(e.message)
        }
    },
    createAdmin: async (access_token, data) => {
        try {

            return await axiosInstance.post('/admin', data, {
                headers: {

                    [headerEnum.AUTHORIZATION]: access_token
                }
            })

        } catch (e) {

            console.log(e.message)
        }
    },

};