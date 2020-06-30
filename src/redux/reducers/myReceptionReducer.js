import {SET_MY_RECEPTIONS, SET_LOADING_PROGRESS} from "../../constant/actionTypes/myReceptionsAC";
import {checkAccessTokenPresent} from "../../helpers/checkAccessTokenPresent";
import {receptionAPI} from "../../api/receptionAPI";
import {setIsReceptionSuccess} from "./receptionReducer";

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

    try {
        dispatch(setIsLoading(true));

        const token = checkAccessTokenPresent();

        const receptions = await receptionAPI.getMyReception(token, email);

        dispatch(setMyReceptions(receptions.data));

        dispatch(setIsLoading(false));

    } catch (e) {
        dispatch(setIsLoading(false));

    }


};
export const getAllReception = () => async dispatch => {

    try {
        dispatch(setIsLoading(true));

        const token = checkAccessTokenPresent();

        const receptions = await receptionAPI.getAllReceptionsRecords(token);

        dispatch(setMyReceptions(receptions.data));

        dispatch(setIsLoading(false));
    } catch (e) {
        dispatch(setIsLoading(false));

    }


};

export const deleteReceptionRecordByPatient = (id, email) => async dispatch => {

    try {
        const token = checkAccessTokenPresent();

        await receptionAPI.dropReceptionRecordByPatient(id, token);

        const receptions = await receptionAPI.getMyReception(token, email);

        dispatch(setMyReceptions(receptions.data))
    } catch (e) {

    }


};
export const deleteReceptionRecordByDoctor = id => async dispatch => {

    try {
        const token = checkAccessTokenPresent();

        await receptionAPI.dropReceptionRecordByDoctor(id, token);

        const records = await receptionAPI.getAllReceptionsRecords(token);

        dispatch(setMyReceptions(records.data))
    } catch (e) {

    }


};


export default myReceptionReducer;

