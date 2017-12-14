import {authFlow} from '../auth';
import {logout, loginSuccess, registrationSuccess} from '../../actions/auth';
import {select, call, take, put} from 'redux-saga/effects';
import {getIsAuthorized} from '../../reducers/auth';
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage,
} from '../../localStorage';
import {setTokenApi, clearTokenApi} from '../../api';
import {fetchWalletRequest} from '../../actions/wallet';

describe('Сага authFlow', () => {
  const saga = authFlow();
  const tokenPayload = {jwt: 'test_token'};
  const token = tokenPayload.jwt;

  describe('Сценарий без токена авторизации в localstorage', () => {
    let num = 1;
    it(num++ + '. Эфект select getIsAuthorized', () => {
      expect(saga.next().value).toEqual(select(getIsAuthorized));
    });

    it(num++ + '. Эфект call getTokenFromLocalStorage', () => {
      expect(saga.next().value).toEqual(call(getTokenFromLocalStorage));
    });

    it(num++ + '. Эфект take с ожиданием loginSuccess', () => {
      expect(saga.next().value).toEqual(take([loginSuccess, registrationSuccess]));
    });

    it(
      num++ + '. Эфект call(setTokenApi, token) где токен, который получен из прошлого шага',
      () => {
        expect(saga.next({payload: tokenPayload}).value).toEqual(call(setTokenApi, token));
      },
    );

    it(num++ + '. Эфект call setTokenToLocalStorage', () => {
      expect(saga.next().value).toEqual(call(setTokenToLocalStorage, token));
    });

    it(num++ + '. Эфект put fetchWalletRequest', () => {
      expect(saga.next().value).toEqual(put(fetchWalletRequest()));
    });

    it(num++ + '. Эфект take logout', () => {
      expect(saga.next().value).toEqual(take(logout));
    });

    it(num++ + '. Эфект call removeTokenFromLocalStorage', () => {
      expect(saga.next().value).toEqual(call(removeTokenFromLocalStorage));
    });

    it(num++ + '. Эфект call clearTokenApi', () => {
      expect(saga.next().value).toEqual(call(clearTokenApi));
    });
  });

  describe('Сценарий c токеном авторизации из localstorage', () => {
    let num = 1;

    it(num++ + '. Эфект select getIsAuthorized', () => {
      expect(saga.next().value).toEqual(select(getIsAuthorized));
    });

    it(num++ + '. Эфект call getTokenFromLocalStorage', () => {
      expect(saga.next().value).toEqual(call(getTokenFromLocalStorage));
    });

    it(num++ + '. Эфект put with loginSuccess', () => {
      expect(saga.next(token).value).toEqual(put(loginSuccess()));
    });

    it(
      num++ + '. Эфект call(setTokenApi, token) где токен, который получен из прошлого шага',
      () => {
        expect(saga.next({payload: token}).value).toEqual(call(setTokenApi, token));
      },
    );

    it(num++ + '. Эфект call setTokenToLocalStorage', () => {
      expect(saga.next().value).toEqual(call(setTokenToLocalStorage, token));
    });

    it(num++ + '. Эфект put fetchWalletRequest', () => {
      expect(saga.next().value).toEqual(put(fetchWalletRequest()));
    });

    it(num++ + '. Эфект take logout', () => {
      expect(saga.next().value).toEqual(take(logout));
    });

    it(num++ + '. Эфект call removeTokenFromLocalStorage', () => {
      expect(saga.next().value).toEqual(call(removeTokenFromLocalStorage));
    });

    it(num++ + '. Эфект call clearTokenApi', () => {
      expect(saga.next().value).toEqual(call(clearTokenApi));
    });
  });
});
