import { FETCH_LAUNCHPAD_DETAILS,SET_MESSAGE} from "../actions/actionTypes";

const INITIAL_STATE = {
    message:''
}

const dataReducer = (currentState=INITIAL_STATE,action) => {
    switch(action.type) {

        case SET_MESSAGE:
            console.log(action.payload);
            return {
                ...currentState,
                message: JSON.stringify(action.payload)
            };

        case FETCH_LAUNCHPAD_DETAILS:
            return {
                ...currentState,
                message: "launchpad data"+action.payload
            }
        default:
            return currentState;
    };
};

export default dataReducer;