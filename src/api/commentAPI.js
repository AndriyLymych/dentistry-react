import axiosInstance from '../helpers/axiosInstance'
import {headersEnum as headerEnum} from "../constant/authConstant/header.enum";
import {checkAccessTokenPresent} from "../helpers/checkAccessTokenPresent";

export const commentAPI = {

    getAllCommentsForEveryDoctor: async (doctorId, commentsCount, currentPage) => {

        try {
            return await axiosInstance.get(`/comments/doctors/${doctorId}?limit=${commentsCount}&page=${currentPage}`)

        } catch (e) {
            console.log(e.message)
        }

    },

    postComment: async (commentData, doctor_id) => {

        try {
            const token = checkAccessTokenPresent();
            return await axiosInstance.post(`/comments?doc=${doctor_id}`, commentData, {
                headers: {

                    [headerEnum.AUTHORIZATION]: token
                }
            })

        } catch (e) {
            console.log(e.message)
        }

    },
    deleteComment: async (comment_id,doctor_id) => {

        try {
            const token = checkAccessTokenPresent();

            return await axiosInstance.delete(`/comments/${comment_id}?doc=${doctor_id}`, {
                headers: {

                    [headerEnum.AUTHORIZATION]: token
                }
            })
        } catch (e) {

            console.log(e.message)

        }
    }

};