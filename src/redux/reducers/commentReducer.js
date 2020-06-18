import {
    SET_COMMENT_INFO, SET_CURRENT_PAGE,
    SET_LOADING_PROGRESS,
    SET_TOTAL_PAGES_COUNT
} from "../../constant/actionTypes/commentAC";
import {commentAPI} from "../../api/commentAPI";
import {reset} from "redux-form";


const initialState = {
    commentInfo: [],
    pageCount: 0,
    commentsCountOnPage: 5,
    currentPage: 1,
    isLoading: false
};


const commentReducer = (
    state
        = initialState,
    action
) => {
    switch (action.type) {

        case SET_COMMENT_INFO :
            return {
                ...state,
                commentInfo: action.payload
            };
        case SET_TOTAL_PAGES_COUNT :
            return {
                ...state,
                pageCount: action.payload
            };
        case SET_CURRENT_PAGE :
            return {
                ...state,
                currentPage: action.payload
            };


        case SET_LOADING_PROGRESS:
            return {
                ...state,
                isLoading: action.payload
            };
        default :
            return state
    }

};

export const setCommentInfo = payload => ({type: SET_COMMENT_INFO, payload});

export const setTotalCommentsCount = payload => ({type: SET_TOTAL_PAGES_COUNT, payload});

export const setIsLoading = payload => ({type: SET_LOADING_PROGRESS, payload});

export const setCurrentPage = payload => ({type: SET_CURRENT_PAGE, payload});


export const getCommentsFromDB = (doctorId, commentsCount, currentPage) => async dispatch => {

    dispatch(setIsLoading(true));

    dispatch(setCurrentPage(currentPage));

    const commentsInfo = await commentAPI.getAllCommentsForEveryDoctor(doctorId, commentsCount, currentPage);

    dispatch(setCommentInfo(commentsInfo.data.comments));

    dispatch(setTotalCommentsCount(commentsInfo.data.pageCount));

    dispatch(setIsLoading(false));

};

export const sendComment = (data, doctor_id, commentCount) => async dispatch => {

    dispatch(setIsLoading(true));

    await commentAPI.postComment(data, doctor_id);

    const commentsInfo = await commentAPI.getAllCommentsForEveryDoctor(doctor_id, commentCount);

    dispatch(setCommentInfo(commentsInfo.data.comments));

    dispatch(setTotalCommentsCount(commentsInfo.data.pageCount));

    dispatch(setIsLoading(false));

    dispatch(reset('comment'))

};
export const deleteChosenComment = (comment_id, doctorId, commentCount, currentPage) => async dispatch => {

    dispatch(setIsLoading(true));

    await commentAPI.deleteComment(comment_id);

    dispatch(setCurrentPage(currentPage));

    const commentsInfo = await commentAPI.getAllCommentsForEveryDoctor(doctorId, commentCount, currentPage);

    dispatch(setCommentInfo(commentsInfo.data.comments));
    dispatch(setTotalCommentsCount(commentsInfo.data.pageCount));
    dispatch(setIsLoading(false));

};

export const editChosenComment = (comment_id, doctorId, newComment, commentCount, currentPage) => async dispatch => {

    dispatch(setIsLoading(true));

    await commentAPI.editComment(comment_id, doctorId, newComment);

    dispatch(setCurrentPage(currentPage));

    const commentsInfo = await commentAPI.getAllCommentsForEveryDoctor(doctorId, commentCount, currentPage);

    dispatch(setCommentInfo(commentsInfo.data.comments));
    dispatch(setTotalCommentsCount(commentsInfo.data.pageCount));
    dispatch(setIsLoading(false));

};

export default commentReducer