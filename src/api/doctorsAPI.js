import axiosInstance from '../helpers/axiosInstance'
import {headersEnum as headerEnum} from "../constant/authConstant/header.enum";

export const doctorsAPI = {
    getDoctors: () => {
        return axiosInstance.get('/doctors')


    },
    getDoctorSpecialities: () => {
        return axiosInstance.get('/doctors/specialities')


    },

    getDoctorById: id => {
        return axiosInstance.get(`/doctors/${id}`)


    },
    updateDoctorAvatar: (avatar, access_token) => {
        const formData = new FormData();

        formData.append('image', avatar);

        return axiosInstance.put('/doctors/update-avatar', formData, {
            headers: {
                [headerEnum.CONTENT_TYPE]: 'multipart/form-data',
                [headerEnum.AUTHORIZATION]: access_token

            }
        })
    }
};
