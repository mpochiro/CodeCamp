import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import TopicDashboardPage from '../components/TopicDashboardPage';
import AddTopicPage from '../components/AddTopicPage';
import EditTopicPage from '../components/EditTopicPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PublicTopicPage from '../components/PublicTopicPage';
import AddCommentPage from '../components/AddCommentPage';
import EditCommentPage from '../components/EditCommentPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={TopicDashboardPage} />
        <PrivateRoute path="/create" component={AddTopicPage} />
        <PrivateRoute path="/edit/:id" component={EditTopicPage} />
        <PrivateRoute path="/topics" component={PublicTopicPage} />
        <PrivateRoute path="/make/comment" component={AddCommentPage} />
        <PrivateRoute path="/redo/:id" component={EditCommentPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
