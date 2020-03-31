import ACTION_TYPES from './IndexPage.actionTypes';
import { MediaState } from './IndexPage.State';
import { AnyAction } from 'redux';

export const initState: MediaState = [];

export default (state: MediaState = initState, action: AnyAction): MediaState => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_MEDIA_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};