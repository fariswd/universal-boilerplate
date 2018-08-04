import React from 'react';
import { hydrate, render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './containers/index';
import reducers from './reducers';

const history = createBrowserHistory();
const store = createStore(reducers, applyMiddleware(routerMiddleware(history)));

if(process.env.NODE_ENV === 'development') {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
    , document.getElementById('app'));
} else {
  hydrate(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
    , document.getElementById('app'));
}

if(process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default);
  });
}
