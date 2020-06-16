import axiosInstance from '../helpers/axiosInstance'
import {headersEnum as headerEnum} from "../constant/authConstant/header.enum";

export const doctorsAPI = {
    getDoctors: () => {

        try {
            return axiosInstance.get('/doctors')

        } catch (e) {
            console.log(e.message)
        }

    },
    getDoctorSpecialities: () => {

        try {
            return axiosInstance.get('/doctors/specialities')

        } catch (e) {
            console.log(e.message)
        }

    },

    getDoctorById: id => {
        try {
            return axiosInstance.get(`/doctors/${id}`)

        } catch (e) {
            console.log(e.message)
        }

    },
    updateDoctorAvatar: (avatar, access_token) => {
        try {
            const formData = new FormData();

            formData.append('image', avatar);

            return axiosInstance.put('/doctors/update-avatar', formData, {
                headers: {
                    [headerEnum.CONTENT_TYPE]: 'multipart/form-data',
                    [headerEnum.AUTHORIZATION]: access_token

                }
            })

        } catch (e) {
            console.log(e.message)
        }

    }
};
