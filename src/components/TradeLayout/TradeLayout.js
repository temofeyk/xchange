import React from 'react';
import {withRouter} from 'react-router-dom';
import {compose, pure} from 'recompose';
import styled from 'styled-components';
import TradeControl from '../TradeControl';
import TradeGraph from '../TradeGraph';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100% - 80px);
  margin-bottom: -100px;

  &: :after {
    content: '';
    display: block;
    height: 100px;
  }
`;

const Container = styled.div`
  width: 1200px;
  padding-top: 10px;
`;

const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const enhance = compose(withRouter, pure);

export const TradeLayout = () => (
  <Main>
    <Container>
      <Columns>
        <TradeControl />
        <TradeGraph />
      </Columns>
    </Container>
  </Main>
);

export default enhance(TradeLayout);
