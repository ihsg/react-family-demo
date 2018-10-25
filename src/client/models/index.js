import { take, put, call, fork, select, all } from 'redux-saga/effects'
import { banners } from '../service'
import { receiveBanners, LOAD_BANNERS } from '../actions'

function* loadBanners() {
  const { ok, result } = yield call(banners.getBanners)
  if (ok) {
    yield put(receiveBanners(result && result.items || []))
  }
}

function* watchLoadBanners() {
  while (true) {
    yield take(LOAD_BANNERS)
    yield fork(loadBanners)
  }
}

export default function* root() {
  yield all([
    fork(watchLoadBanners)
  ])
}