import axiosInstance from "../helpers/axiosInstance";
import {headersEnum as headerEnum} from "../constant/authConstant/header.enum";

export const medicalServicesAPI = {
    getAllMedicalServices: () => {
        return axiosInstance.get('/services')


    },
    getMedicalServiceById: id => {

        return axiosInstance.get(`/services/${id}`)


    },
    addService: (service, description, photo, price, access_token) => {

        const formData = new FormData();

        formData.append('service', service);
        formData.append('description', description);
        formData.append('image', photo);
        formData.append('price', price);

        return axiosInstance.post('/admin/services', formData, {
            headers: {
                [headerEnum.CONTENT_TYPE]: 'multipart/form-data',
                [headerEnum.AUTHORIZATION]: access_token
            }
        })

    },
    deleteService: (id, access_token) => {
        return axiosInstance.delete(`/admin/services/${id}`, {
            headers: {
                [headerEnum.AUTHORIZATION]: access_token
            }
        })

    },
    updateService: (data, id, access_token) => {

        return axiosInstance.put(`/admin/services/${id}`, data, {
            headers: {
                [headerEnum.AUTHORIZATION]: access_token
            }
        })

    },
    updateServicePhoto: (photo, id, access_token) => {

        const formData = new FormData();
        formData.append('image', photo);

        return axiosInstance.put(`/admin/services/photo/${id}`, formData, {
            headers: {
                [headerEnum.CONTENT_TYPE]: 'multipart/form-data',
                [headerEnum.AUTHORIZATION]: access_token
            }
        })

    },
};