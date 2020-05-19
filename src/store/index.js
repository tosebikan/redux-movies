import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import apiMiddleware from '../middleware';

const store = createStore(reducer, applyMiddleware(apiMiddleware));

export default store;
