import axiosInstance from "../helpers/axiosInstance";

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

    }
};