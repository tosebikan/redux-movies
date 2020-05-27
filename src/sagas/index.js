import {put, takeLatest, all} from 'redux-saga/effects';
import {newsKey} from '../env.js';

function* fetchNews(){
  const json = yield fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${newsKey}`)
  .then(response => response.json(),)

  yield put({type: "NEWS_RECEIVED", json: json.articles})
}

function* actionWatcher(){
  yield takeLatest("GET_NEWS", fetchNews)
}

export default function* rootSaga(){
  yield all([
    actionWatcher(),
  ])
}
