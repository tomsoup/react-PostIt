import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PostsIndex from './components/posts/PostsIndex'
import PostNew from './components/posts/PostNew';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <PostNew path="posts/new" component={PostNew} />
  </Route>
);