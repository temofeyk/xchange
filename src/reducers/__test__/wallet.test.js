import wallet, {coinsInit} from '../wallet';
import {fetchWalletRequest, fetchWalletSuccess, fetchWalletFailure} from '../../actions/wallet';

describe('reducer wallet', () => {
  const errorMsg = 'error_msg';
  const payload = {usd: 1, btc: 2, eth: 3};

  describe('fetchWalletRequest must set', () => {
    const next = wallet(undefined, {type: fetchWalletRequest});

    it('isLoading === true', () => {
      expect(next.isLoading).toEqual(true);
    });
    it(`coins === ${JSON.stringify(coinsInit)}`, () => {
      expect(next.coins).toEqual(coinsInit);
    });
    it('error === null', () => {
      expect(next.error).toEqual(null);
    });
  });

  describe('fetchWalletSuccess must set', () => {
    const next = wallet(undefined, {type: fetchWalletSuccess, payload});

    it('isLoading === false', () => {
      expect(next.isLoading).toEqual(false);
    });
    it('coins === payload', () => {
      expect(next.coins).toEqual(payload);
    });
    it('error === null', () => {
      expect(next.error).toEqual(null);
    });
  });

  describe('fetchWalletFailure must set', () => {
    const next = wallet(undefined, {type: fetchWalletFailure, payload: errorMsg});

    it('isLoading === false', () => {
      expect(next.isLoading).toEqual(false);
    });
    it(`coins === ${JSON.stringify(coinsInit)}`, () => {
      expect(next.coins).toEqual(coinsInit);
    });
    it('payload === "error_msg"', () => {
      expect(next.error).toEqual(errorMsg);
    });
  });
});
