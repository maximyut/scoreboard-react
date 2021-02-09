import React from 'react';
import { Switch, Route } from 'react-router';

import LoginPage from './containers/LoginPage';
import LoggedInPage from './containers/LoggedInPage';

import MainPage from './containers/MainPage/MainPage';
import ControlPanelPage from './containers/ControlPanelPage/ControlPanelPage';

export default (
  <Switch>
    {/* <Route exact path="/" component={MainPage} /> */}
    <Route exact path="/" component={ControlPanelPage} />
    {/* <Route exact path="/" component={LoginPage} /> */}
    {/* <Route exact path="/loggedin" component={LoggedInPage} /> */}
  </Switch>
);
