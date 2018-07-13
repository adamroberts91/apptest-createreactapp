import { SMSC_LOGIN } from "../actions";

export default function (state = { loggedIn: false }, action){
    switch(action.type){
        case SMSC_LOGIN:
            return action.payload;
        default:
            return state;
    }
}