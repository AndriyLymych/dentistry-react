import axiosInstance from '../helpers/axiosInstance'
import {headersEnum as headerEnum} from "../constant/authConstant/header.enum";

export const receptionAPI = {

    getMyReception: (access_token, email) => {

        try {

            return axiosInstance.get(`/receptions/me?email=${email}`, {
                headers: {
                    [headerEnum.AUTHORIZATION]: access_token
                }
            })
        } catch (e) {
            console.log(e.message);
        }
    },

    receptionPatientToDB: reception_data => {

        try {

            return axiosInstance.post(`patients/reception`, reception_data)

        } catch (e) {
            console.log(e.message);
        }
    },
    dropReceptionRecordByPatient: (record_id, access_token) => {

        try {

            return axiosInstance.delete(`/receptions/${record_id}`, {
                headers: {
                    [headerEnum.AUTHORIZATION]: access_token
                }
            })

        } catch (e) {
            console.log(e.message);
        }
    },
    dropReceptionRecordByDoctor: (record_id, access_token) => {

        try {

            return axiosInstance.delete(`/receptions/by-doctor/${record_id}`, {
                headers: {
                    [headerEnum.AUTHORIZATION]: access_token
                }
            })

        } catch (e) {
            console.log(e.message);
        }
    },
    getAllReceptionsRecords: access_token => {
        try {

            return axiosInstance.get(`/receptions`, {
                headers: {
                    [headerEnum.AUTHORIZATION]: access_token
                }
            })

        } catch (e) {
            console.log(e.message);
        }
    },
};