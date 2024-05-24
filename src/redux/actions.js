export const SEND_EMAIL_REQUEST = 'SEND_EMAIL_REQUEST';
export const SEND_EMAIL_SUCCESS = 'SEND_EMAIL_SUCCESS';
export const SEND_EMAIL_FAILURE = 'SEND_EMAIL_FAILURE';

export const sendEmailRequest = () => ({
    type: SEND_EMAIL_REQUEST,
});

export const sendEmailSuccess = () => ({
    type: SEND_EMAIL_SUCCESS,
});

export const sendEmailFailure = (error) => ({
    type: SEND_EMAIL_FAILURE,
    payload: error,
});
