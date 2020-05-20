import {getMeInfo} from "./authReducer";
import {INITIALIZED_PROGRESS} from "../../constant/actionTypes/appAC";

const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case INITIALIZED_PROGRESS :

            return {
                ...state,
                initialized: true
            };


        default :
            return state

    }
};
export const setInitializedProgress = () => ({type: INITIALIZED_PROGRESS});

export const initializeApp = () =>  dispatch => {

    const result = dispatch(getMeInfo());

    Promise.all([result]).then(()=>{

        dispatch(setInitializedProgress())

    });
};


export default appReducer