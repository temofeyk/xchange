import React from 'react';
import {withRouter} from 'react-router-dom';
import {compose, pure} from 'recompose';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {getCoins} from '../../reducers/wallet';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 298px;
`;

const Value = styled.div`
  background-color: #414244;
  border: 1px solid #000;
  color: #ffffff;
  border-radius: 4px;
  padding: 6px 0;
  flex: 1 1 150px;
  margin: 5px 0;
`;

const Left = styled.span`
  width: 55%;
  display: inline-block;
  text-align: right;
`;

const Right = styled.span`
  color: #8a8a8a;
  max-width: 78px;
  display: inline-block;
  vertical-align: bottom;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Desc = styled.div`
  flex: 1 1;
  text-align: left;
  margin: 15px 0 0 15px;
`;

const enhance = compose(
  withRouter,
  connect(store => ({
    coins: getCoins(store),
  })),
  pure,
);

export const WalletRecord = props => {
  const {currency, coins} = props;
  const parts = String(coins[currency]).split('.');

  return (
    <Container>
      <Value>
        <Left>{parts[0]}</Left>
        .
        <Right>{parts.length > 1 ? parts[1].substr(0, 3) : 0}</Right>
      </Value>
      <Desc>{currency === 'usd' ? '$' : String(currency).toLocaleUpperCase()}</Desc>
    </Container>
  );
};

export default enhance(WalletRecord);
