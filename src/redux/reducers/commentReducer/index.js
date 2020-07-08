import {
    SET_COMMENT_INFO, SET_CURRENT_PAGE,
    SET_LOADING_PROGRESS,
    SET_TOTAL_PAGES_COUNT
} from "./constants";

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

export default commentReducer