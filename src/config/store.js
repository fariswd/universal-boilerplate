import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

const history = createBrowserHistory();
const store = createStore(
  reducers,
  applyMiddleware(
    routerMiddleware(history),
    thunk
  )
);

export default store