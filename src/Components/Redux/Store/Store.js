import {createStore} from 'redux';
import reducers from '../Reducers/Reducers';

const store = createStore(reducers);

export default store;
