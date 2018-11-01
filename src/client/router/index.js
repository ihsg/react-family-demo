import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import root from './root';
import { userLogin } from './paths';

let pathDatas = [];
const formatPathData = (route) => {
  if (route.childRoutes && route.childRoutes.length > 0) {
    route.childRoutes.map(item => formatPathData(item));
  }
  pathDatas.push({
    ...route,
    component: withRouter(route.component),
  });
};

const configRouter = ({ isLogin }) => {
  pathDatas = [];
  formatPathData(root);
  const router = pathDatas.map(item => (<RouteWrapper key={item.path} isLogin={isLogin} {...item} />));
  console.log(router);
  return router;
};

const RouteWrapper = ({ ...rest }) => {
  const { requireAuthorization, isLogin } = rest;
  const loggedIn = isLogin();
  return (requireAuthorization ? (<PrivateRoute loggedIn={loggedIn} {...rest} />) : (<Route {...rest} />));
};

const PrivateRoute = ({ loggedIn, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      loggedIn ? (<Component {...props} />) : (
        <Redirect to={{
          pathname: userLogin,
          state: {
            from: props.location,
          },
        }}
        />
      ))}
  />
);

const RootRouter = ({ history, isLogin }) => (
  <Router>
    <ConnectedRouter history={history}>
      <Switch>
        {
          configRouter({ isLogin })
        }
      </Switch>
    </ConnectedRouter>
  </Router>
);

RootRouter.propTypes = {
  history: PropTypes.object.isRequired,
  isLogin: PropTypes.func.isRequired,
};

export default RootRouter;
