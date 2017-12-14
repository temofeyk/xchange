import {createActions} from 'redux-actions';

const {
  auth: {
    loginRequest,
    loginSuccess,
    loginFailure,
    registrationRequest,
    registrationSuccess,
    registrationFailure,
    logout,
  },
} = createActions({
  AUTH: {
    LOGIN_REQUEST: undefined,
    LOGIN_SUCCESS: undefined,
    LOGIN_FAILURE: undefined,
    REGISTRATION_REQUEST: undefined,
    REGISTRATION_SUCCESS: undefined,
    REGISTRATION_FAILURE: undefined,
    RESET_ERROR: undefined,
    LOGOUT: undefined,
  },
});

export {
  loginRequest,
  loginSuccess,
  loginFailure,
  registrationRequest,
  registrationSuccess,
  registrationFailure,
  logout,
};
