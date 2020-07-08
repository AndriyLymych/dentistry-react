import {SET_IS_REFRESH_LOADING} from "./constants";

const initialState = {
    isRefreshLoading: false
};

const refreshReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_IS_REFRESH_LOADING :

            return {
                ...state,
                isRefreshLoading: action.payload
            };


        default :
            return state

    }
};

export default refreshReducer