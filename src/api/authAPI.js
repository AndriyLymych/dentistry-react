import axiosInstance from '../helpers/axiosInstance'

export const authAPI = {
    login: async (email, password) => {
        return await axiosInstance.post(`auth`, {email, password})
    },
    // logout: () => {
    //     return axiosInstance.delete(`auth/login`)
    // },
};