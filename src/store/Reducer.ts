import { combineReducers, Reducer } from 'redux';
import { StoreState } from './StoreState';
import mediaReducer from '../containers/IndexPage/IndexPage.reducers';

const applicationReducers: Reducer<StoreState> =
  combineReducers({
    media: mediaReducer,
  });

export default applicationReducers;