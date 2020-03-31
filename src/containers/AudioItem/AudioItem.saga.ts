import { put, takeLatest } from 'redux-saga/effects';
import { getWhateverAction } from './AudioItem.actions';
import ACTION_TYPES from './AudioItem.actionTypes';

export function* getWhatever() {
    yield put(getWhateverAction('any'));
}

export function* watchMedia() {
    yield takeLatest(ACTION_TYPES.WHATEVER, getWhatever);
}
