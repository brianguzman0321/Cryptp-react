import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Page Imports
import HomePage from './Pages/Home';
import NoPageFound from './Pages/NoPageFound';

const Routes = () => {
  return (
    <Switch>
      <Route path="/currency" exact component={HomePage} />
      <Redirect from="/" to="/currency" />
      <Route component={NoPageFound} />
    </Switch>
  );
};

export default Routes;
