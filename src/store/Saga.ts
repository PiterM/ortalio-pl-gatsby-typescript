import { all, CallEffect, fork, ForkEffect, TakeEffect } from 'redux-saga/effects';
import { watchMedia } from '../containers/IndexPage/IndexPage.saga';

const sagas: Array<() => IterableIterator<ForkEffect | CallEffect | TakeEffect>> = [
  watchMedia,
];

function* globalSagas() {
  const globalSagasForks = sagas.map(saga => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;