import {getMeInfo} from "../authReducer/thunks";
import {setInitializedProgress} from "./actions";

export const initializeApp = () =>  dispatch => {

    const result = dispatch(getMeInfo());

    Promise.all([result]).then(()=>{

        dispatch(setInitializedProgress())

    });
};