import { createStore, compose, applyMiddleware } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import routes from '../routes';
import { createHistory } from 'history';

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware),
  reduxReactRouter({ routes, createHistory }),
  applyMiddleware(createLogger()),
)(createStore);
