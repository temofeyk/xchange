import {
  selectOffset,
  //btc
  selectBtc,
  fetchBtcRequest,
  fetchBtcSuccess,
  fetchBtcFailure,
  //
  selectEth,
  fetchEthRequest,
  fetchEthFailure,
  fetchEthSuccess,
} from '../actions/currency';
import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';

const selected = handleActions(
  {
    [selectBtc]: () => 'btc',
    [selectEth]: () => 'eth',
  },
  'btc',
);

const offset = handleActions(
  {
    [selectOffset]: (state, action) => action.payload,
  },
  '4h',
);

const isBtcLoading = handleActions(
  {
    [fetchBtcRequest]: () => true,
    [fetchBtcSuccess]: () => false,
    [fetchBtcFailure]: () => false,
  },
  false,
);

const btc = handleActions(
  {
    [fetchBtcSuccess]: (state, action) => action.payload,
    [fetchBtcFailure]: () => [],
  },
  [],
);

const isEthLoading = handleActions(
  {
    [fetchEthRequest]: () => true,
    [fetchEthSuccess]: () => false,
    [fetchEthFailure]: () => false,
  },
  false,
);
const eth = handleActions(
  {
    [fetchEthSuccess]: (state, action) => action.payload,
    [fetchEthFailure]: () => [],
  },
  [],
);

export default combineReducers({
  selected,
  offset,
  btc,
  isBtcLoading,
  eth,
  isEthLoading,
});

export const getSelected = ({currency}) => currency.selected;
export const getOffset = ({currency}) => currency.offset;

export const getIsLoading = ({currency}) =>
  currency.selected === 'btc' ? currency.isBtcLoading : currency.isBtcLoading;

export const getSell = ({currency}) => currency[currency.selected].map(r => [r.mts / 1000, r.sell]);
export const getPurchase = ({currency}) =>
  currency[currency.selected].map(r => [r.mts / 1000, r.purchase]);

export const getMin = ({currency}, type) => {
  const values = currency[type || currency.selected].map(r => Math.min(r.sell, r.purchase));
  return values.length ? values.reduce((acc, val) => Math.min(acc, val)) : 0;
};

export const getMax = ({currency}, type) => {
  const values = currency[type || currency.selected].map(r => Math.max(r.sell, r.purchase));
  return values.length ? values.reduce((acc, val) => Math.max(acc, val)) : 0;
};

const getCurrent = (currency, type, need) => {
  return currency[type].length ? currency[type][0][need] : 0;
};

export const getCurrentBtcSell = ({currency}) => getCurrent(currency, 'btc', 'sell');
export const getCurrentBtcPurchase = ({currency}) => getCurrent(currency, 'btc', 'purchase');

export const getCurrentEthSell = ({currency}) => getCurrent(currency, 'eth', 'sell');
export const getCurrentEthPurchase = ({currency}) => getCurrent(currency, 'eth', 'purchase');
