import { SMSC_CREDENTIALS} from "../actions";

export default function(state = {}, action) {
    switch(action.type){
        case SMSC_CREDENTIALS:
            return [...state,
                {
                    id: action.id,
                    username: action.payload.username,
                    password: action.payload.password
                }];
        default:
            return state;
    }
}