import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import RootRouter from './router';
import createStore from './store';
import sagas from './sagas';
import { isLogin } from './selectors/userSelector';

const history = createBrowserHistory();

const store = createStore({ history });
store.runSaga(sagas);

const renderApp = () => render(
  <Provider store={store}>
    <RootRouter history={history} isLogin={() => isLogin(store.getState())} />
  </Provider>,
  document.getElementById('root'),
);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept();
}

renderApp();
