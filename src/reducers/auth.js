import {
  loginRequest,
  loginSuccess,
  loginFailure,
  registrationRequest,
  registrationSuccess,
  registrationFailure,
} from '../actions/auth';
import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';

const isAuthorized = handleActions(
  {
    [loginRequest]: () => false,
    [loginSuccess]: () => true,
    [loginFailure]: () => false,
    [registrationRequest]: () => false,
    [registrationSuccess]: () => true,
    [registrationFailure]: () => false,
  },
  false,
);

const loginError = handleActions(
  {
    [loginRequest]: () => null,
    [loginSuccess]: () => null,
    [loginFailure]: (state, action) => action.payload,
    [registrationRequest]: () => null,
    [registrationSuccess]: () => null,
    [registrationFailure]: () => null,
  },
  null,
);

const registationError = handleActions(
  {
    [loginRequest]: () => null,
    [loginSuccess]: () => null,
    [loginFailure]: () => null,
    [registrationRequest]: () => null,
    [registrationSuccess]: () => null,
    [registrationFailure]: (state, action) => action.payload,
  },
  null,
);

export default combineReducers({
  isAuthorized,
  loginError,
  registationError,
});

export const getIsAuthorized = ({auth}) => auth.isAuthorized;
export const getloginError = ({auth}) => auth.loginError;
export const getRegistationError = ({auth}) => auth.registationError;
