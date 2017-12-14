import React from 'react';
import {withRouter} from 'react-router-dom';
import {compose, pure} from 'recompose';
import {connect} from 'react-redux';
import Spinner from 'react-svg-spinner';
import styled from 'styled-components';
import WalletRecord from '../WalletRecord';
import {getIsLoading} from '../../reducers/wallet';

const Container = styled.div`
  width: 450px;
`;

const enhance = compose(
  withRouter,
  connect(store => ({
    isLoading: getIsLoading(store),
  })),
  pure,
);

export const Wallet = props => {
  const {isLoading} = props;

  return (
    <Container>
      <h2>Ваш счет</h2>
      {isLoading ? (
        <Spinner gap={5} />
      ) : (
        ['usd', 'btc', 'eth'].map(currency => <WalletRecord key={currency} currency={currency} />)
      )}
    </Container>
  );
};

export default enhance(Wallet);
