import { put, takeLatest, PutEffect } from 'redux-saga/effects';
import {
    FetchAllMediaDataSuccessAction,
    fetchAllMediaDataErrorAction,
    FetchAllMediaDataErrorAction,
    fetchAllMediaDataSuccessAction,
} from './IndexPage.actions';
import ACTION_TYPES from './IndexPage.actionTypes';

type GetAllMediaDataIterator = IterableIterator<
    PutEffect<FetchAllMediaDataSuccessAction | FetchAllMediaDataErrorAction>
>;

export function* getAllMediaData(): GetAllMediaDataIterator {
    try {
        yield put(fetchAllMediaDataSuccessAction([
            {
                title: 'Kawałek #1',
                description: 'Opis kawałka 1',
                content: 'Jakieś słowa do utworu<br/>coś tam coś tam',
                url: 'http://costam.pl',
                isPlaying: false,
                order: 1
            }
        ]));
    } catch (error) {
        yield put(fetchAllMediaDataErrorAction(error.getMessage()))
    }
}

export function* watchMedia() {
    yield takeLatest(ACTION_TYPES.FETCH_ALL_MEDIA_DATA_INIT, getAllMediaData);
}