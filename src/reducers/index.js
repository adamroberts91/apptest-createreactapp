import { combineReducers } from 'redux';
import SMSCCredentials from './reducer_smscCredentials';
import loggedIn from './reducer_login';

const rootReducer = combineReducers({
    credentials: SMSCCredentials,
    loggedIn
});

export default rootReducer;
