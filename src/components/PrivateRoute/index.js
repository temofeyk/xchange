import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {compose, pure} from 'recompose';
import {connect} from 'react-redux';
import {getIsAuthorized} from '../../reducers/auth';

const enhance = compose(
  withRouter,
  connect(store => ({
    isAuthorized: getIsAuthorized(store),
  })),
  pure,
);

export const PrivateRoute = props => {
  const {isAuthorized, component: Component, ...rest} = props;

  return (
    <Route
      {...rest}
      render={props => (isAuthorized ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default enhance(PrivateRoute);
