import React from 'react';
import { Route, Redirect } from 'react-router';
import { createHistory } from 'history';
import {
  App,
  Blogs,
} from './containers';

export default (
  <Route>
    <Route path='/' component={App}>
      <Route path='/blogs' component={Blogs} />
    </Route>
  </Route>
)
