import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import topicsReducer from '../reducers/topics';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import commentsReducer from '../reducers/comments'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      topics: topicsReducer,
      filters: filtersReducer,
      auth: authReducer,
      comments: commentsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
