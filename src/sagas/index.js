import {fork} from 'redux-saga/effects';
import {loginWatch} from './login';
import {registrationWatch} from './registration';
import {authFlow} from './auth';
import {fetchBtcWatch, fetchEthWatch, currencyWatch} from './currency';
import {fetchWalletWatch} from './wallet';
import {buyCurrencyWatch} from './buy';
import {sellCurrencyWatch} from './sell';
import {userInfoWatch} from './user';

export default function*() {
  yield fork(authFlow);
  yield fork(loginWatch);
  yield fork(registrationWatch);
  yield fork(fetchBtcWatch);
  yield fork(fetchEthWatch);
  yield fork(currencyWatch);
  yield fork(fetchWalletWatch);
  yield fork(buyCurrencyWatch);
  yield fork(sellCurrencyWatch);
  yield fork(userInfoWatch);
}
