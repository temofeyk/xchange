import React from 'react';
import {withRouter} from 'react-router-dom';
import {compose, pure} from 'recompose';
import styled from 'styled-components';
import Wallet from '../Wallet';
import TradeOperations from '../TradeOperations';

const Container = styled.div`
  width: 450px;
  padding-top: 10px;
`;

const enhance = compose(withRouter, pure);

export const TradeControl = () => (
  <Container>
    <Wallet />
    <TradeOperations />
  </Container>
);

export default enhance(TradeControl);
