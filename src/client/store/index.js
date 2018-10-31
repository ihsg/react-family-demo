import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import logger from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers';

export default ({ initialState, history }) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  if (process.env.NODE_ENV !== 'product') {
    middlewares.push(logger);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const composedEnhancers = compose(middlewareEnhancer);

  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composedEnhancers,
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
};
