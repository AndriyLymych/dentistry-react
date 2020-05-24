import {SET_MY_RECEPTIONS, SET_LOADING_PROGRESS} from "../../constant/actionTypes/myReceptionsAC";
import {SET_IS_AUTH, SET_ME_INFO} from "../../constant/actionTypes/authAC";
import {checkAccessTokenPresent} from "../../helpers/checkAccessTokenPresent";
import {receptionAPI} from "../../api/receptionAPI";

const initialState = {
    receptions: [],
    isLoading: false
};

const myReceptionReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_MY_RECEPTIONS :
            return {
                ...state,
                receptions: action.payload
            };
        case SET_LOADING_PROGRESS :
            return {
                ...state,
                isLoading: action.payload
            };

        default :
            return state

    }
};

const setMyReceptions = payload => ({type: SET_MY_RECEPTIONS, payload});
const setIsLoading = payload => ({type: SET_LOADING_PROGRESS, payload});

export const getMyProfileReceptions = email => async dispatch => {

    dispatch(setIsLoading(true));
    const token = checkAccessTokenPresent();
    const receptions = await receptionAPI.getMyReception(token, email);
    dispatch(setMyReceptions(receptions.data));
    dispatch(setIsLoading(false));


};

export default myReceptionReducer;

