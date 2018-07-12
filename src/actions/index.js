export const SMSC_CREDENTIALS = 'SMSC_CREDENTIALS';


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