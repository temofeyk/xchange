import {fetchWalletRequest, fetchWalletSuccess, fetchWalletFailure} from '../actions/wallet';
import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {sellCurrencyFailure, buyCurrencyFailure} from '../actions/currency';

const isLoading = handleActions(
  {
    [fetchWalletRequest]: () => true,
    [fetchWalletSuccess]: () => false,
    [fetchWalletFailure]: () => false,
  },
  false,
);

export const coinsInit = {usd: 0, btc: 0, eth: 0};

const coins = handleActions(
  {
    [fetchWalletRequest]: () => ({...coinsInit}),
    [fetchWalletSuccess]: (state, action) => ({...action.payload}),
    [fetchWalletFailure]: () => ({...coinsInit}),
  },
  coinsInit,
);

const error = handleActions(
  {
    [fetchWalletRequest]: () => null,
    [fetchWalletSuccess]: () => null,
    [fetchWalletFailure]: (state, action) => action.payload,
    [buyCurrencyFailure]: (state, action) => action.payload,
    [sellCurrencyFailure]: (state, action) => action.payload,
  },
  null,
);

export default combineReducers({
  isLoading,
  coins,
  error,
});

export const getIsLoading = ({wallet}) => wallet.isLoading;
export const getCoins = ({wallet}) => (wallet.coins ? {...wallet.coins} : {...coinsInit});
export const getError = ({wallet}) => wallet.error;
