import React from 'react';
import {compose, pure, withHandlers} from 'recompose';
import {getOffset} from '../../reducers/currency';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {selectOffset} from '../../actions/currency';

const offsets = {
  '2h': '2ч',
  '4h': '4ч',
  '8h': '8ч',
  '1d': 'сутки',
  '7d': 'неделя',
};

const enhance = compose(
  connect(
    store => ({
      offset: getOffset(store),
    }),
    {
      selectOffset,
    },
  ),
  withHandlers({
    handleClick: props => ({target}) => {
      props.selectOffset(target.getAttribute('value'));
    },
  }),
  pure,
);

const OffsetsPanel = styled.div`
  margin-bottom: 12px;
`;

const Offset = styled.button`
  border: 1px solid green;
  margin: 0 4px;
  background-color: green;
  color: white;
  padding: 2px 16px;
  cursor: pointer;
`;

const activeStyle = {
  backgroundColor: 'white',
  color: 'green',
};

export const Offsets = ({offset, handleClick}) => {
  return (
    <OffsetsPanel>
      {Object.keys(offsets).map(off => (
        <Offset
          key={off}
          value={off}
          style={offset === off ? activeStyle : {}}
          onClick={handleClick}
        >
          {offsets[off]}
        </Offset>
      ))}
    </OffsetsPanel>
  );
};

export default enhance(Offsets);
