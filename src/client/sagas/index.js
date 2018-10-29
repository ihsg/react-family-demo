import { fork, all } from 'redux-saga/effects'
import allSagas from './allSagas'

export default function* root() {
  yield all(allSagas.map(item => fork(item)))
}