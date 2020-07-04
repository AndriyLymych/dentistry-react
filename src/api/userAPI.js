import axiosInstance from '../helpers/axiosInstance'
import {headersEnum as headerEnum} from "../constant/authConstant/header.enum";

export const userAPI = {

    updateProfileInfo: (access_token, data) => {

        return axiosInstance.put(`/users/update-profile`, data, {
            headers: {
                [headerEnum.AUTHORIZATION]: access_token
            }
        })

    },
    setMark: (access_token, mark, doctor_id) => {

        return axiosInstance.post(`/users/evaluate-doctor?doctor_id=${doctor_id}`, {mark}, {
            headers: {
                [headerEnum.AUTHORIZATION]: access_token
            }
        })

    },
    getIsEvaluated: (access_token, doctor_id) => {

        return axiosInstance.get(`/users/is-evaluated?doctor_id=${doctor_id}`, {
            headers: {
                [headerEnum.AUTHORIZATION]: access_token
            }
        })

    },
    getAVGMark: doctor_id => {

        return axiosInstance.get(`/users/average-mark?doctor_id=${doctor_id}`)

    },
    getAllActiveUsers: (name = '') => {

        return axiosInstance.get(`/users/active?name=${name}`)

    },
    getAllBlockedUsers: (name = '') => {

        return axiosInstance.get(`/users/blocked?name=${name}`)

    }
};