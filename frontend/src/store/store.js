import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';

// const logger = createLogger({
//   // ...options
// });

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;