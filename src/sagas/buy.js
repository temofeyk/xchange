import {takeLatest, call, put, fork} from 'redux-saga/effects';
import {buyCurrencyRequest, buyCurrencySuccess, buyCurrencyFailure} from '../actions/currency';
import {buyCurrency} from '../api';

export function* buyCurrencySaga(action) {
  try {
    const {currencyName, value} = action.payload;

    const response = yield call(buyCurrency, currencyName, value);
    yield put(buyCurrencySuccess(response.data));
  } catch (error) {
    yield put(buyCurrencyFailure(error));
  }
}

function* onBuyCurrencyWatch() {
  yield takeLatest(buyCurrencyRequest, buyCurrencySaga);
}

export function* buyCurrencyWatch() {
  yield fork(onBuyCurrencyWatch);
}
