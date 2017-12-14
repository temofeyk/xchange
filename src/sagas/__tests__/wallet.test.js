import {fetchWalletSuccess, fetchWalletFailure} from '../../actions/wallet';
import {call, put} from 'redux-saga/effects';
import {fetchWalletSaga} from '../wallet';
import {getWallet} from '../../api';

describe('Saga Wallet:', () => {
  const action = {payload: 'test_login'};
  const response = {data: {result: []}};
  const error = new Error('test error');

  it('1. call getWallet', () => {
    const value = call(getWallet, action.payload);

    const saga = fetchWalletSaga(action);
    expect(saga.next().value).toEqual(value);
  });

  it('2. dispatch action fetchWalletSuccess with response.data from call on success call', () => {
    const value = put(fetchWalletSuccess(response.data.result));

    const saga = fetchWalletSaga(action);
    saga.next();
    expect(saga.next(response).value).toEqual(value);
  });

  it('3. dispatch action fetchWalletFailure with wallet from call on success call', () => {
    const value = put(fetchWalletFailure(error));

    const saga = fetchWalletSaga(action);
    saga.next();
    expect(saga.throw(error).value).toEqual(value);
  });
});
