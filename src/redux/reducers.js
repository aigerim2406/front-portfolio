import { combineReducers } from 'redux';
import {
    SEND_EMAIL_REQUEST,
    SEND_EMAIL_SUCCESS,
    SEND_EMAIL_FAILURE,
} from './actions';

const initialState = {
    loading: false,
    error: null,
};

const emailReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_EMAIL_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SEND_EMAIL_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case SEND_EMAIL_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default combineReducers({
    email: emailReducer,
});
