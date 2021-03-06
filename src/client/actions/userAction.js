import createAction from './createAction';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const userLoginRequest = () => createAction(USER_LOGIN_REQUEST);
export const userLoginSuccess = () => createAction(USER_LOGIN_SUCCESS);
export const userLoginFailure = () => createAction(USER_LOGIN_FAILURE);


export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';

export const userLogoutRequest = () => createAction(USER_LOGOUT_REQUEST);
export const userLogoutSuccess = () => createAction(USER_LOGOUT_SUCCESS);
export const userLogoutFailure = () => createAction(USER_LOGOUT_FAILURE);
