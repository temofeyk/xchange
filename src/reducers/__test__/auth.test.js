import auth from '../auth';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  registrationRequest,
  registrationSuccess,
  registrationFailure,
} from '../../actions/auth';

describe('reducer auth', () => {
  const payload = 'error';

  describe('loginRequest must set', () => {
    const next = auth(undefined, {type: loginRequest, payload});

    it('isAuthorized === false', () => {
      expect(next.isAuthorized).toEqual(false);
    });
    it('loginError === null', () => {
      expect(next.loginError).toEqual(null);
    });
    it('registationError === null', () => {
      expect(next.registationError).toEqual(null);
    });
  });

  describe('loginSuccess must set', () => {
    const next = auth(undefined, {type: loginSuccess, payload});

    it('isAuthorized === false', () => {
      expect(next.isAuthorized).toEqual(true);
    });
    it('loginError === null', () => {
      expect(next.loginError).toEqual(null);
    });
    it('registationError === null', () => {
      expect(next.registationError).toEqual(null);
    });
  });

  describe('loginFailure must set', () => {
    const next = auth(undefined, {type: loginFailure, payload: payload});

    it('isAuthorized === false', () => {
      expect(next.isAuthorized).toEqual(false);
    });
    it('loginError === payload', () => {
      expect(next.loginError).toEqual(payload);
    });
    it('registationError === null', () => {
      expect(next.registationError).toEqual(null);
    });
  });

  describe('registrationRequest must set', () => {
    const next = auth(undefined, {type: registrationRequest, payload});

    it('isAuthorized === false', () => {
      expect(next.isAuthorized).toEqual(false);
    });
    it('loginError === null', () => {
      expect(next.loginError).toEqual(null);
    });
    it('registationError === null', () => {
      expect(next.registationError).toEqual(null);
    });
  });

  describe('registrationSuccess must set', () => {
    const next = auth(undefined, {type: registrationSuccess, payload});

    it('isAuthorized === false', () => {
      expect(next.isAuthorized).toEqual(true);
    });
    it('loginError === null', () => {
      expect(next.loginError).toEqual(null);
    });
    it('registationError === null', () => {
      expect(next.registationError).toEqual(null);
    });
  });

  describe('registrationFailure must set', () => {
    const next = auth(undefined, {type: registrationFailure, payload});

    it('isAuthorized === false', () => {
      expect(next.isAuthorized).toEqual(false);
    });
    it('loginError === null', () => {
      expect(next.loginError).toEqual(null);
    });
    it('registationError === payload', () => {
      expect(next.registationError).toEqual(payload);
    });
  });
});
