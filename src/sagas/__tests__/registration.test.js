import {registrationSuccess, registrationFailure} from '../../actions/auth';
import {call, put} from 'redux-saga/effects';
import {registrationSaga} from '../registration';
import {registration} from '../../api';

describe('Saga registration :', () => {
  const action = {payload: {email: 'test_email', password: 'test_pasword'}};
  const response = {data: {}};
  const error = {data: {message: {email: ['error_message']}}};

  it('1. call registration  with payload={email, password}', () => {
    const value = call(registration, action.payload);

    const saga = registrationSaga(action);
    expect(saga.next().value).toEqual(value);
  });

  it('2. dispatch action registrationSuccess with response.data from call on success call', () => {
    const value = put(registrationSuccess(response.data));

    const saga = registrationSaga(action);
    saga.next();
    expect(saga.next(response).value).toEqual(value);
  });

  it('3. dispatch action registrationFailure with user from call on success call', () => {
    const error_message = `email: ${error.data.message.email.join(',')}`;
    const value = put(registrationFailure(error_message));

    const saga = registrationSaga(action);
    saga.next();
    expect(saga.throw(error).value).toEqual(value);
  });
});
