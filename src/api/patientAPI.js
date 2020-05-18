import axiosInstance from '../helpers/axiosInstance'

export const patientAPI = {
    registerPatient: async registerData => {
        return await axiosInstance.post(`patients`, registerData)
    }
};