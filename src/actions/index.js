export const SMSC_CREDENTIALS = 'SMSC_CREDENTIALS';
export const SMSC_LOGIN = 'SMSC_LOGIN';


export function smscCredentials(username, password, callback) {
    const data = {
        username,
        password
    };

    callback();
    return {
        type: SMSC_CREDENTIALS,
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