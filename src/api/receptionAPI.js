import axiosInstance from '../helpers/axiosInstance'
import {headersEnum as headerEnum} from "../constant/authConstant/header.enum";

export const receptionAPI = {

    getMyReception: (access_token,email) => {

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
};