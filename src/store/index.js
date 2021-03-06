import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {logger} from 'redux-logger';
import reducer from '../reducers';
import apiMiddleware from '../middleware';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(apiMiddleware, sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

export default store;
