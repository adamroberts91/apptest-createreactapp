export const SMSC_CREDENTIALS = 'SMSC_CREDENTIALS';
export const SMSC_LOGIN = 'SMSC_LOGIN';

let AccountId = 0;

export function smscCredentials(username, password, callback) {
    AccountId++;

    const data = {
        username,
        password
    };

    callback();
    return {
        type: SMSC_CREDENTIALS,
        id: AccountId,
        payload: data
    }
}

export function smscLogin() {

    const loggedIn = {
        loggedIn: true
    };

    return {
        type: SMSC_LOGIN,
        payload: loggedIn
    }
}