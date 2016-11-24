import { routerStateReducer } from 'redux-router';
import { combineReducers } from 'redux';
import 'core-js/es6/object';

const rootReducer = combineReducers({
  router: routerStateReducer,
  blogs: require('./blogs'),
})

export default rootReducer;
