import React from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import AuthPage from '../AuthPage';
import PrivateRoute from '../PrivateRoute';
import Trade from '../Trade';

const enhance = compose(withRouter);

export const AppRouter = () => (
  <Switch>
    <PrivateRoute path="/trade/:selected" component={Trade} />
    <Route path="/" exact component={AuthPage} />
    <Redirect to="/trade/btc" />
  </Switch>
);

export default enhance(AppRouter);
