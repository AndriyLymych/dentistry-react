import axiosInstance from '../helpers/axiosInstance'

export const patientAPI = {
    
    registerPatient: async registerData => {
        try {
            return await axiosInstance.post(`/patients`, registerData)

        } catch (e) {
            console.log(e.message)
        }

    }
};