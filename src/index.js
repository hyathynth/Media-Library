import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import routes from './routes';

ReactDOM.render(
  <Router history={BrowserRouter} routes={routes} />,
  document.getElementById('root')
);