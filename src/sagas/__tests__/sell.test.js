import {sellCurrencySuccess, sellCurrencyFailure} from '../../actions/currency';
import {call, put} from 'redux-saga/effects';
import {sellCurrencySaga} from '../sell';
import {sellCurrency} from '../../api';

describe('Saga sellCurrency:', () => {
  const action = {payload: {currencyName: 'test_currency', value: 'test_value'}};
  const response = {data: {}};
  const error = 'error_message';

  let num = 1;

  it(num++ + '. call sellCurrency with payload={currency, value}', () => {
    const {currencyName, value} = action.payload;
    const result = call(sellCurrency, currencyName, value);

    const saga = sellCurrencySaga(action);
    expect(saga.next().value).toEqual(result);
  });

  it(num++ + '. dispatch sellCurrencySuccess with response.data from call on success call', () => {
    const value = put(sellCurrencySuccess(response.data));

    const saga = sellCurrencySaga(action);
    saga.next();
    expect(saga.next(response).value).toEqual(value);
  });

  it(num++ + '. dispatch sellCurrencyFailure with user from call on success call', () => {
    const value = put(sellCurrencyFailure(error));

    const saga = sellCurrencySaga(action);
    saga.next();
    expect(saga.throw(error).value).toEqual(value);
  });
});
