import { combineReducers } from 'redux';
import LoginReducer from './reducer_login';

const rootReducer = combineReducers({
    credentials: LoginReducer
});

export default rootReducer;
