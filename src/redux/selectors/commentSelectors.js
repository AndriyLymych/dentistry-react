export const isLoadingCommentsSelector = state => {
    return state.commentReducer.isLoading
};

export const commentInfoSelector = state => {
    return state.commentReducer.commentInfo
};

export const pageCountSelector = state => {
    return state.commentReducer.pageCount
};

export const commentsCountOnPageSelector = state => {
    return state.commentReducer.commentsCountOnPage
};

export const currentPageSelector = state => {
    return state.commentReducer.currentPage
};