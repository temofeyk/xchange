import {buyCurrencySuccess, buyCurrencyFailure} from '../../actions/currency';
import {call, put} from 'redux-saga/effects';
import {buyCurrencySaga} from '../buy';
import {buyCurrency} from '../../api';

describe('Saga buyCurrency:', () => {
  const action = {payload: {currencyName: 'test_currency', value: 'test_value'}};
  const response = {data: {}};
  const error = 'error_message';

  let num = 1;

  it(num++ + '. call buyCurrency with payload={currency, value}', () => {
    const {currencyName, value} = action.payload;
    const result = call(buyCurrency, currencyName, value);

    const saga = buyCurrencySaga(action);
    expect(saga.next().value).toEqual(result);
  });

  it(num++ + '. dispatch buyCurrencySuccess with response.data from call on success call', () => {
    const value = put(buyCurrencySuccess(response.data));

    const saga = buyCurrencySaga(action);
    saga.next();
    expect(saga.next(response).value).toEqual(value);
  });

  it(num++ + '. dispatch buyCurrencyFailure with user from call on success call', () => {
    const value = put(buyCurrencyFailure(error));

    const saga = buyCurrencySaga(action);
    saga.next();
    expect(saga.throw(error).value).toEqual(value);
  });
});
