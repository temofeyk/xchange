import {createActions} from 'redux-actions';

const {
  currency: {
    selectOffset,
    //btc
    selectBtc,
    fetchBtcRequest,
    fetchBtcSuccess,
    fetchBtcFailure,
    //eth
    selectEth,
    fetchEthRequest,
    fetchEthFailure,
    fetchEthSuccess,
    //
    buyCurrencyRequest,
    buyCurrencyFailure,
    buyCurrencySuccess,
    //
    sellCurrencyRequest,
    sellCurrencyFailure,
    sellCurrencySuccess,
  },
} = createActions({
  CURRENCY: {
    SELECT_OFFSET: undefined,
    //
    SELECT_BTC: undefined,
    FETCH_BTC_REQUEST: undefined,
    FETCH_BTC_SUCCESS: undefined,
    FETCH_BTC_FAILURE: undefined,
    //
    SELECT_ETH: undefined,
    FETCH_ETH_REQUEST: undefined,
    FETCH_ETH_FAILURE: undefined,
    FETCH_ETH_SUCCESS: undefined,
    //
    BUY_CURRENCY_REQUEST: undefined,
    BUY_CURRENCY_FAILURE: undefined,
    BUY_CURRENCY_SUCCESS: undefined,
    //
    SELL_CURRENCY_REQUEST: undefined,
    SELL_CURRENCY_FAILURE: undefined,
    SELL_CURRENCY_SUCCESS: undefined,
  },
});

export {
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
  //
  buyCurrencyRequest,
  buyCurrencyFailure,
  buyCurrencySuccess,
  //
  sellCurrencyRequest,
  sellCurrencyFailure,
  sellCurrencySuccess,
};
