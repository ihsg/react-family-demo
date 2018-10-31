import React from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter, Redirect } from 'react-router-dom';
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

const configRouter = () => {
  pathDatas = [];
  formatPathData(root);
  const router = pathDatas.map(item => (<RouteWrapper key={item.path} {...item} />));
  console.log(router);
  return router;
};

const RouteWrapper = ({ ...rest }) => {
  const { requireAuthorization } = rest;
  const isLogin = false; // TODO: connect to store
  return (requireAuthorization ? (<PrivateRoute isLogin={isLogin} {...rest} />) : (<Route {...rest} />));
};

const PrivateRoute = ({ isLogin, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isLogin ? (<Component {...props} />) : (
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

export default () => (
  <Router>
    <Switch>
      {
        configRouter()
      }
    </Switch>
  </Router>
);
