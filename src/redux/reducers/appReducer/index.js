import {INITIALIZED_PROGRESS} from "./constants";

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

export default appReducer