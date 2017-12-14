import {takeLatest, call, put, fork} from 'redux-saga/effects';
import {registrationRequest, registrationSuccess, registrationFailure} from '../actions/auth';
import {registration} from '../api';

export function* registrationSaga(action) {
  try {
    const response = yield call(registration, action.payload);
    yield put(registrationSuccess(response.data));
  } catch (response) {
    const errorMsg = `email: ${response.data.message.email.join(',')}`;
    yield put(registrationFailure(errorMsg));
  }
}

function* onRegistrationWatch() {
  yield takeLatest(registrationRequest, registrationSaga);
}

export function* registrationWatch() {
  yield fork(onRegistrationWatch);
}
