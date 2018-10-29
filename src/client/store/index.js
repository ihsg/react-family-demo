import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '../reducers';

export default (initialState) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  if (process.env.NODE_ENV !== 'product') {
    // eslint-disable-next-line
    const logger = require('redux-logger');
    middlewares.push(logger);
  }

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        ...middlewares,
      ),
    ),
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
};
