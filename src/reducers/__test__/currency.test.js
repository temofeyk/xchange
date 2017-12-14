import currency from '../currency';
import {fetchBtcSuccess, fetchEthSuccess} from '../../actions/currency';
import {getSell, getPurchase, getMin, getMax} from '../../reducers/currency';

describe('reducer currency', () => {
  [
    ['empty payloads', []],
    [
      'payloads 2 items',
      [
        {
          purchase: 1,
          sell: 2,
          mts: 10000000000,
        },
        {
          purchase: 3,
          sell: 4,
          mts: 20000000000,
        },
      ],
    ],
  ].forEach(item => {
    let num = 1;

    const payload = item[1],
      isEmpty = !payload.length;

    describe(item[0], () => {
      //getSell
      const sell = payload.map(d => [d.mts / 1000, d.sell]);

      it(num++ + '. should getSell return [btc.sell] for selected = "btc"', () => {
        const next = currency(undefined, {type: fetchBtcSuccess, payload});
        next.selected = 'btc';

        expect(getSell({currency: next})).toEqual(isEmpty ? [] : sell);
      });

      it(num++ + '. should getSell return [eth.sell] for selected = "eth"', () => {
        const next = currency(undefined, {type: fetchEthSuccess, payload});
        next.selected = 'eth';

        expect(getSell({currency: next})).toEqual(isEmpty ? [] : sell);
      });

      //getPurchase
      const purchase = payload.map(d => [d.mts / 1000, d.purchase]);

      it(num++ + '. should getPurchase return [btc.purchase] for selected = "btc"', () => {
        const next = currency(undefined, {type: fetchBtcSuccess, payload});
        next.selected = 'btc';

        expect(getPurchase({currency: next})).toEqual(isEmpty ? [] : purchase);
      });

      it(num++ + '. should getPurchase return [eth.purchase] for selected = "eth"', () => {
        const next = currency(undefined, {type: fetchEthSuccess, payload});
        next.selected = 'eth';

        expect(getPurchase({currency: next})).toEqual(isEmpty ? [] : purchase);
      });

      //getMin
      it(num++ + '. should getMin return [btc.sell] for selected = "btc"', () => {
        const next = currency(undefined, {type: fetchBtcSuccess, payload});
        next.selected = 'btc';

        expect(getMin({currency: next})).toEqual(isEmpty ? 0 : 1);
      });

      it(num++ + '. should getMin return [eth.sell] for selected = "eth"', () => {
        const next = currency(undefined, {type: fetchEthSuccess, payload});
        next.selected = 'eth';

        expect(getMin({currency: next})).toEqual(isEmpty ? 0 : 1);
      });

      //getMax
      it(num++ + '. should getMax return [btc.purchase] for selected = "btc"', () => {
        const next = currency(undefined, {type: fetchBtcSuccess, payload});
        next.selected = 'btc';

        expect(getMax({currency: next})).toEqual(isEmpty ? 0 : 4);
      });

      it(num++ + '. should getMax return [eth.purchase] for selected = "eth"', () => {
        const next = currency(undefined, {type: fetchEthSuccess, payload});
        next.selected = 'eth';

        expect(getMax({currency: next})).toEqual(isEmpty ? 0 : 4);
      });
    });
  });
});
