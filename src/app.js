import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetTopics } from './actions/topics';
import { startSetComments } from './actions/comments';
import { login, logout } from './actions/auth';
import getVisibleTopics from './selectors/topics';
import getVisibleComments from './selectors/comments';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetTopics()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetComments()).then(() => {
      renderApp();
      if (history.location.pathname === '/topics') {
        history.push('/topics');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
