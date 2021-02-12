import React from 'react';
import { Switch, Route } from 'react-router';

import LoginPage from '../app/renderer/containers/LoginPage';
import LoggedInPage from '../app/renderer/containers/LoggedInPage';

import MainPage from '../app/renderer/containers/MainPage/MainPage';
import ControlPanelPage from '../app/renderer/containers/ControlPanelPage/ControlPanelPage';

export default (
  <Switch>
    {/* <Route exact path="/" component={MainPage} /> */}
    {/* <Route exact path="/" component={ControlPanelPage} /> */}
    <Route exact path="/" component={LoginPage} />
    <Route exact path="/loggedin" component={LoggedInPage} />
  </Switch>
);
