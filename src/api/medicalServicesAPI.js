import axiosInstance from "../helpers/axiosInstance";
import {headersEnum as headerEnum} from "../constant/authConstant/header.enum";

export const medicalServicesAPI = {
    getAllMedicalServices: async () => {
        try {
            return await axiosInstance.get('/services')

        } catch (e) {
            console.log(e.message)
        }


    },
    getMedicalServiceById: async id => {

        try {
            return await axiosInstance.get(`/services/${id}`)

        } catch (e) {
            console.log(e.message)
        }

    },
    addService: async (service, description, photo, price, access_token) => {

        const formData = new FormData();

        formData.append('service', service);
        formData.append('description', description);
        formData.append('image', photo);
        formData.append('price', price);


        try {
            return await axiosInstance.post('/admin/services', formData, {
                headers: {
                    [headerEnum.CONTENT_TYPE]: 'multipart/form-data',
                    [headerEnum.AUTHORIZATION]: access_token
                }
            })
        } catch (e) {
            console.log(e);
        }
    },
    deleteService: async (id, access_token) => {
        try {
            return await axiosInstance.delete(`/admin/services/${id}`, {
                headers: {
                    [headerEnum.AUTHORIZATION]: access_token
                }
            })
        } catch (e) {
            console.log(e);
        }
    },
    updateService: async (data, id, access_token) => {

        try {
            
            return await axiosInstance.put(`/admin/services/${id}`, data, {
                headers: {
                    [headerEnum.AUTHORIZATION]: access_token
                }
            })
        } catch (e) {
            console.log(e);
        }
    },
    updateServicePhoto: async (photo, id, access_token) => {

        try {
            const formData = new FormData();
            formData.append('image', photo);

            return await axiosInstance.put(`/admin/services/photo/${id}`, formData, {
                headers: {
                    [headerEnum.CONTENT_TYPE]: 'multipart/form-data',
                    [headerEnum.AUTHORIZATION]: access_token
                }
            })
        } catch (e) {
            console.log(e);
        }
    },
};