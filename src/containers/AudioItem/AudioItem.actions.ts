import { AnyAction } from 'redux';
import ACTION_TYPE from './AudioItem.actionTypes';

export interface GetWhateverAction extends AnyAction {
  payload: string;
  type: ACTION_TYPE.WHATEVER;
}
export type getWhateverAction = (payload: string) => GetWhateverAction;
export const getWhateverAction: getWhateverAction = (payload: string) => {
  return {
    payload,
    type: ACTION_TYPE.WHATEVER
  };
};
