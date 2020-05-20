import axiosInstance from '../helpers/axiosInstance'

export const doctorsAPI = {
    getDoctors: () => {

        try {
            return axiosInstance.get('/doctors')

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

    }
};
