import { put, call, takeEvery } from 'redux-saga/effects';
import { getBanners } from '../api';
import { apiBannersSuccess, apiBannersFailure, API_BANNERS_REQUEST } from '../actions';

function* apiBannersRequest() {
  const { ok, result } = yield call(getBanners);
  if (ok) {
    yield put(apiBannersSuccess(result && result.items));
  } else {
    yield put(apiBannersFailure(result.message));
  }
}

function* watchApiBannersRequest() {
  yield takeEvery(API_BANNERS_REQUEST, apiBannersRequest);
}

export default [watchApiBannersRequest];
