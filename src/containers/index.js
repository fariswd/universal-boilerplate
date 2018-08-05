import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthRoute from '../components/AuthRoute';
if(process.env.WEBPACK) require('../assets/paper-dashboard/sass/paper-dashboard.scss');

import Home from './Home';
import NotFound from './NotFound';
import Dashboard from './Dashboard';

export default () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Home} />
      <AuthRoute exact path='/dashboard' component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </div>
);