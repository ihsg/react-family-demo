import { put, call, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { USER_LOGIN_REQUEST, userLoginSuccess, USER_LOGOUT_REQUEST, userLogoutSuccess } from '../actions';

function* userLoginRequest() {
  yield call(delay, 1000);
  yield put(userLoginSuccess());
}

function* watchUserLoginRequest() {
  yield takeEvery(USER_LOGIN_REQUEST, userLoginRequest);
}

function* userLogoutRequest() {
  yield call(delay, 1000);
  yield put(userLogoutSuccess());
}

function* watchUserLogoutRequest() {
  yield takeEvery(USER_LOGOUT_REQUEST, userLogoutRequest);
}

export default [
  watchUserLoginRequest,
  watchUserLogoutRequest,
];
