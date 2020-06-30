import axiosInstance from '../helpers/axiosInstance'
import {headersEnum as headerEnum} from "../constant/authConstant/header.enum";
import {checkAccessTokenPresent} from "../helpers/checkAccessTokenPresent";

export const commentAPI = {

    getAllCommentsForEveryDoctor: (doctorId, commentsCount, currentPage = 1) => {

        return axiosInstance.get(`/comments/doctors/${doctorId}?limit=${commentsCount}&page=${currentPage}`)


    },

    postComment: (commentData, doctor_id) => {


        const token = checkAccessTokenPresent();
        return axiosInstance.post(`/comments?doc=${doctor_id}`, commentData, {
            headers: {

                [headerEnum.AUTHORIZATION]: token
            }
        })


    },
    deleteComment: comment_id => {

        const token = checkAccessTokenPresent();

        return axiosInstance.delete(`/comments/${comment_id}`, {
            headers: {

                [headerEnum.AUTHORIZATION]: token
            }
        })

    },

    editComment: (comment_id, doctor_id, newComment) => {

        const token = checkAccessTokenPresent();

        return axiosInstance.put(
            `/comments/${comment_id}?doc=${doctor_id}`,
            {commentText: newComment},
            {
                headers: {

                    [headerEnum.AUTHORIZATION]: token
                }
            })

    }

};