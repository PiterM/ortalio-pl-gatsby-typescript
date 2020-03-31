import { AudioItemState } from '../AudioItem/AudioItem.State';

export interface MediaState {
  [index: number]: AudioItemState;
}
