import React from 'react';
import { Switch, Route } from 'react-router';
import Navbar from './components/Navbar';
import ControlPanelPage from './containers/ControlPanelPage';
import styled from "styled-components";
 const routes = (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={ControlPanelPage} />
    </Switch>
  </>
);
const Block = styled.div`

`;

export default routes;
