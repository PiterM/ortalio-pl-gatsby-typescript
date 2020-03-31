import { AudioItemState } from './AudioItem.State';
import { AnyAction } from 'redux';

export const initState: AudioItemState[] = [];

export default (state: AudioItemState[] = initState, action: AnyAction): AudioItemState[] => {
  switch (action.type) {
    default:
      return state;
  }
};
