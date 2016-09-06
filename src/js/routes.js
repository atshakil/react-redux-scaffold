import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import NotFoundView from './views/NotFoundView';
import CommentBox from './containers/CommentBox/CommentBox';

// Include an index route for the homepage followed by rest of the routes
export default (
  <Route path="/" component={App}>
    <IndexRoute component={CommentBox} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
