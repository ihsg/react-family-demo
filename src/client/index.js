import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Router from './router'
import createStore from './store'
import sagas from './sagas'

const store = createStore()
store.runSaga(sagas)

const renderApp = () => render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept()
}

renderApp()