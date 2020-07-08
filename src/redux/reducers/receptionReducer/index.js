import {SET_IS_RECEPTION_LOADING, SET_IS_RECEPTION_SUCCESS} from "./constants";

const initialState = {
    isReceptionSuccess: false,
    isReceptionLoading: false

};

const receptionReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_IS_RECEPTION_SUCCESS :

            return {
                ...state,
                isReceptionSuccess: action.payload
            };

        case SET_IS_RECEPTION_LOADING :

            return {
                ...state,
                isReceptionLoading: action.payload
            };

        default :
            return state

    }
};

export default receptionReducer;