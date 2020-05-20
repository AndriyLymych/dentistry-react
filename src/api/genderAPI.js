import axiosInstance from '../helpers/axiosInstance'

export const genderAPI = {
    getAllGenders: async () => {
        try {
            return await axiosInstance.get(`/genders`)
        } catch (e) {
            console.log(e.message);
        }

    }
};