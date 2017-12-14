import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {compose, lifecycle, pure} from 'recompose';
import styled from 'styled-components';
import {selectBtc, selectEth} from '../../actions/currency';
import {connect} from 'react-redux';
import {getMax} from '../../reducers/currency';

export const TradeLinkStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 80px;
  justify-content: center;
  margin: 0 8px;
  text-decoration: none;
  cursor: auto;
  color: white;
`;

const extractCurrens = match => (match.params.selected === 'eth' ? 'eth' : 'btc');

const handleChangeSelect = props => {
  const type = props.type,
    select = extractCurrens(props.match);

  if (select !== type) {
    props[extractCurrens(props.match) === 'btc' ? 'selectBtc' : 'selectEth']();
  }
};

const enhance = compose(
  withRouter,
  connect(
    store => ({
      'max[btc]': getMax(store, 'btc'),
      'max[eth]': getMax(store, 'eth'),
    }),
    {
      selectBtc,
      selectEth,
    },
  ),
  lifecycle({
    componentDidMount() {
      handleChangeSelect(this.props);
    },

    componentWillReceiveProps(nextProps) {
      if (extractCurrens(this.props.match) !== extractCurrens(nextProps.match)) {
        handleChangeSelect(nextProps);
      }
    },
  }),
  pure,
);

export const TradeLink = props => {
  const {match, type} = props,
    current = extractCurrens(match),
    switchTo = current === 'eth' ? 'btc' : 'eth',
    max = props[`max[${type}]`].toFixed(1),
    title = `1 ${type.toUpperCase()}`;

  return switchTo === type ? (
    <Link to={`${switchTo}`}>
      <TradeLinkStyled>
        {max}
        <b>{title}</b>
      </TradeLinkStyled>
    </Link>
  ) : (
    <TradeLinkStyled style={{color: '#aaa'}} disabled>
      {max}
      <b>{title}</b>
    </TradeLinkStyled>
  );
};

export default enhance(TradeLink);
