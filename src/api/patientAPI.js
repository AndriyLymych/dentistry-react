import axiosInstance from '../helpers/axiosInstance'

export const patientAPI = {

    registerPatient: registerData => {
        return axiosInstance.post(`/patients`, registerData)


    }
};