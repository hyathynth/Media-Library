import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import HomePage from './components/HomePage';

export default (
  <Route path="/" component={App}>
    <Route exact component={HomePage} />
  </Route>
);