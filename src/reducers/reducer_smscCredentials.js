import { SMSC_CREDENTIALS} from "../actions";

export default function(state = {}, action) {
    switch(action.type){
        case SMSC_CREDENTIALS:
            return action.payload;
        default:
            return state;
    }
}