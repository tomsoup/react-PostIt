import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PostsIndex from './components/posts/PostsIndex'
import PostNew from './components/posts/PostNew';
import PostShow from './components/posts/PostShow';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostNew} />
    <Route path="posts/:id" component={PostShow} />
  </Route>
);
