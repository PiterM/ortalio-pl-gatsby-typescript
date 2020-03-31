import applicationReducers from './Reducer';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import saga from './Saga';
import { StoreState } from './StoreState';
import { EnvironmentMode } from '../utilities/Constants';

let store: Store<StoreState>;
const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === EnvironmentMode.Production) {
  store = createStore<StoreState>(applicationReducers, applyMiddleware(...middlewares));
} else {
  store = createStore<StoreState>(applicationReducers, composeEnhancers(applyMiddleware(...middlewares)));
}

sagaMiddleware.run(saga);

export default store;