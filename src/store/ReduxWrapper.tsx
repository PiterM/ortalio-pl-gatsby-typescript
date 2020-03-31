import { Provider } from 'react-redux';
import store from './Store';

export default ({ element }: any) => (
  <Provider store={store}>{element}</Provider>
);
