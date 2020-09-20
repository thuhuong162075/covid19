import {all, call} from 'redux-saga/effects';
import watchingDataSaga from './pages/contents/saga';
// theo doi tat ca cac saga
export default function* rootSaga() {
    yield all([
        call(watchingDataSaga),
      ])
}