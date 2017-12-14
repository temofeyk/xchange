import React from 'react';
import {withRouter} from 'react-router-dom';
import {compose, pure} from 'recompose';
import {LineChart} from 'react-chartkick';
import {connect} from 'react-redux';
import Offsets from '../Offsets';
import Spinner from 'react-svg-spinner';
import styled from 'styled-components';
import {getSell, getPurchase, getMin, getMax, getIsLoading} from '../../reducers/currency';

const Container = styled.div`
  width: 750px;
`;

const Panel = styled.div`
  width: 750px;
  text-align: center;
`;

const enhance = compose(
  withRouter,
  connect(store => ({
    sell: getSell(store),
    purchase: getPurchase(store),
    min: getMin(store),
    max: getMax(store),
    isLoading: getIsLoading(store),
  })),
  pure,
);

export const TradeGraph = props => {
  const {sell, purchase, min, max, isLoading} = props;

  return (
    <Container>
      <h2>Окно графика</h2>
      <Offsets />
      <Panel>
        {isLoading ? (
          <Spinner gap={5} />
        ) : (
          <LineChart
            data={[{name: 'Продажа', data: sell}, {name: 'Покупка', data: purchase}]}
            min={min}
            max={max}
            width={750}
            height={400}
          />
        )}
      </Panel>
    </Container>
  );
};

export default enhance(TradeGraph);
