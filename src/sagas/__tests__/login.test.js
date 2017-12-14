import {loginSuccess, loginFailure} from '../../actions/auth';
import {call, put} from 'redux-saga/effects';
import {loginSaga} from '../login';
import {login} from '../../api';

describe('Saga login:', () => {
  const action = {payload: {email: 'test_email', password: 'test_pasword'}};
  const response = {data: {}};
  const error = {data: {message: 'error_message'}};

  it('1. call login with payload={email, password}', () => {
    const value = call(login, action.payload);

    const saga = loginSaga(action);
    expect(saga.next().value).toEqual(value);
  });

  it('2. dispatch action loginSuccess with response.data from call on success call', () => {
    const value = put(loginSuccess(response.data));

    const saga = loginSaga(action);
    saga.next();
    expect(saga.next(response).value).toEqual(value);
  });

  it('3. dispatch action loginFailure with user from call on success call', () => {
    const value = put(loginFailure(error.data.message));

    const saga = loginSaga(action);
    saga.next();
    expect(saga.throw(error).value).toEqual(value);
  });
});
