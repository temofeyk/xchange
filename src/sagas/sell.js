import {takeLatest, call, put, fork} from 'redux-saga/effects';
import {sellCurrencyRequest, sellCurrencySuccess, sellCurrencyFailure} from '../actions/currency';
import {sellCurrency} from '../api';

export function* sellCurrencySaga(action) {
  try {
    const {currencyName, value} = action.payload;

    const response = yield call(sellCurrency, currencyName, value);
    yield put(sellCurrencySuccess(response.data));
  } catch (error) {
    yield put(sellCurrencyFailure(error));
  }
}

function* onSellCurrencyWatch() {
  yield takeLatest(sellCurrencyRequest, sellCurrencySaga);
}

export function* sellCurrencyWatch() {
  yield fork(onSellCurrencyWatch);
}
