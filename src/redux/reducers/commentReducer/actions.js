import {SET_COMMENT_INFO, SET_CURRENT_PAGE, SET_LOADING_PROGRESS, SET_TOTAL_PAGES_COUNT} from "./constants";

export const setCommentInfo = payload => ({type: SET_COMMENT_INFO, payload});
export const setTotalCommentsCount = payload => ({type: SET_TOTAL_PAGES_COUNT, payload});
export const setIsLoading = payload => ({type: SET_LOADING_PROGRESS, payload});
export const setCurrentPage = payload => ({type: SET_CURRENT_PAGE, payload});