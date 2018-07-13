import { combineReducers } from 'redux';
import LoginReducer from './reducer_smscCredentials';

const rootReducer = combineReducers({
    credentials: LoginReducer
});

export default rootReducer;
