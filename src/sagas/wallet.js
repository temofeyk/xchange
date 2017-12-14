import {takeLatest, call, put, fork} from 'redux-saga/effects';
import {getWallet} from '../api';
import {fetchWalletSuccess, fetchWalletFailure, fetchWalletRequest} from '../actions/wallet';
import {sellCurrencySuccess, buyCurrencySuccess} from '../actions/currency';

export function* fetchWalletSaga(action) {
  try {
    const response = yield call(getWallet, action.payload);

    if (response.data.result === 'error') {
      throw new Error(response.data.message);
    }
    yield put(fetchWalletSuccess(response.data.result));
  } catch (error) {
    yield put(fetchWalletFailure(error));
  }
}

function* onFetchWalletWatch() {
  yield takeLatest([fetchWalletRequest, sellCurrencySuccess, buyCurrencySuccess], fetchWalletSaga);
}

export function* fetchWalletWatch() {
  yield fork(onFetchWalletWatch);
}
