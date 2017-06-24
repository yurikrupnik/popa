import {compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const composeEnhancers = global.window && global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default composeEnhancers(
    applyMiddleware(thunk, logger)
);