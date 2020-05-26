import axiosInstance from '../helpers/axiosInstance'

export const commentAPI = {

    getAllCommentsForEveryDoctor:async (doctorId,commentsCount,currentPage) => {

        try {
            return await axiosInstance.get(`/comments/doctors/${doctorId}?limit=${commentsCount}&page=${currentPage}`)

        } catch (e) {
            console.log(e.message)
        }

    },

};