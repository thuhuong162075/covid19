import { call, put, takeLatest } from 'redux-saga/effects';
import {
    isLoading,
    loadingSuccess,
    loadingFailure,
    GET_DATA
} from './action'
import { api } from '../../service/api';

function* getInfoCovidSaga() {
    try {
        yield put(isLoading(true));
        const data = yield call(api.infoCovidApi);
        if(Object.keys(data).length !== 0) {
            yield put(loadingSuccess(data));
        } else {
            yield put(loadingFailure('not found data'));
        }
    } catch (e) {
        console.log(e);
    }
}
export default function* watchingDataSaga() {
    yield takeLatest(GET_DATA, getInfoCovidSaga)
}