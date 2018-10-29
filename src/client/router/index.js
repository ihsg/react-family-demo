import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../containers/AppContainer';

const root = '/';

export default () => (
  <Router>
    <Route path={root} component={App} />
  </Router>
);
