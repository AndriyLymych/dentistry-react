import axiosInstance from '../helpers/axiosInstance'

export const doctorsAPI = {
    getDoctors: () => {

        return axiosInstance.get('/doctors')

    }
}
