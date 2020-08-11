import axiosInstance from '../helpers/axiosInstance'
import {headersEnum as headerEnum} from "../constant/authConstant/header.enum";
import {checkAccessTokenPresent} from "../helpers/checkAccessTokenPresent";

export const receptionAPI = {

    getMyReception: (access_token, email) => {

        return axiosInstance.get(`/receptions/me?email=${email}`, {
            headers: {
                [headerEnum.AUTHORIZATION]: access_token
            }
        })

    },

    receptionPatientToDB: (reception_data) => {

        const token = checkAccessTokenPresent();

        return axiosInstance.post(`patients/reception`, reception_data,{
            headers:{
                [headerEnum.AUTHORIZATION]:token
            }
        })

    },
    dropReceptionRecordByPatient: (record_id, access_token) => {

        return axiosInstance.delete(`/receptions/${record_id}`, {
            headers: {
                [headerEnum.AUTHORIZATION]: access_token
            }
        })

    },
    dropReceptionRecordByDoctor: (record_id, access_token) => {

        return axiosInstance.delete(`/receptions/by-doctor/${record_id}`, {
            headers: {
                [headerEnum.AUTHORIZATION]: access_token
            }
        })

    },
    getAllReceptionsRecords: access_token => {

        return axiosInstance.get(`/receptions`, {
            headers: {
                [headerEnum.AUTHORIZATION]: access_token
            }
        })

    },
};