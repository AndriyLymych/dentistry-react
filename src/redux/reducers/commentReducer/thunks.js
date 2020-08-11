import {commentAPI} from "../../../api/commentAPI";
import {reset} from "redux-form";
import {refreshUserToken} from "../refreshReducer/thunks";
import {setCommentInfo, setCurrentPage, setIsLoading, setTotalCommentsCount} from "./actions";
import {customErrors} from "../../../constant/customErrors/customErrors";

export const getCommentsFromDB = (doctorId, commentsCount, currentPage) => async dispatch => {

    try {
        dispatch(setIsLoading(true));
        dispatch(setCurrentPage(currentPage));

        const commentsInfo = await commentAPI.getAllCommentsForEveryDoctor(doctorId, commentsCount, currentPage);

        dispatch(setCommentInfo(commentsInfo.data.comments));
        dispatch(setTotalCommentsCount(commentsInfo.data.pageCount));
        dispatch(setIsLoading(false));

    } catch (e) {
        dispatch(setIsLoading(false));

    }

};

export const sendComment = (data, doctor_id, commentCount) => async dispatch => {

    try {
        dispatch(setIsLoading(true));

        await commentAPI.postComment(data, doctor_id);

        const commentsInfo = await commentAPI.getAllCommentsForEveryDoctor(doctor_id, commentCount);

        dispatch(setCommentInfo(commentsInfo.data.comments));
        dispatch(setTotalCommentsCount(commentsInfo.data.pageCount));
        dispatch(setIsLoading(false));
        dispatch(reset('comment'))

    } catch (e) {
        dispatch(setIsLoading(false));

        if (e.response.data.code === customErrors[4012].code) {
            dispatch(refreshUserToken());
            dispatch(sendComment(data, doctor_id, commentCount))
        }
    }

};
export const deleteChosenComment = (comment_id, doctorId, commentCount, currentPage) => async dispatch => {

    try {
        dispatch(setIsLoading(true));

        await commentAPI.deleteComment(comment_id);

        dispatch(setCurrentPage(currentPage));

        const commentsInfo = await commentAPI.getAllCommentsForEveryDoctor(doctorId, commentCount, currentPage);

        dispatch(setCommentInfo(commentsInfo.data.comments));
        dispatch(setTotalCommentsCount(commentsInfo.data.pageCount));
        dispatch(setIsLoading(false));

    } catch (e) {
        dispatch(setIsLoading(false));

        if (e.response.data.code === customErrors[4012].code) {
            dispatch(refreshUserToken());
            dispatch(deleteChosenComment(comment_id, doctorId, commentCount, currentPage))
        }

    }

};

export const editChosenComment = (comment_id, doctorId, newComment, commentCount, currentPage) => async dispatch => {

    try {
        dispatch(setIsLoading(true));

        await commentAPI.editComment(comment_id, doctorId, newComment);

        dispatch(setCurrentPage(currentPage));

        const commentsInfo = await commentAPI.getAllCommentsForEveryDoctor(doctorId, commentCount, currentPage);

        dispatch(setCommentInfo(commentsInfo.data.comments));
        dispatch(setTotalCommentsCount(commentsInfo.data.pageCount));
        dispatch(setIsLoading(false));

    } catch (e) {
        dispatch(setIsLoading(false));

        if (e.response.data.code === customErrors[4012].code) {
            dispatch(refreshUserToken());
            dispatch(editChosenComment(comment_id, doctorId, newComment, commentCount, currentPage))
        }

    }

};