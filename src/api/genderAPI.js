import axiosInstance from '../helpers/axiosInstance'

export const genderAPI = {
    getAllGenders: () => {
        return axiosInstance.get(`/genders`)

    }
};