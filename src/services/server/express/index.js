
import logger from './logger';
import api from './api';
import bodyparser from './body-parser';
import session from './session';
import views from './views';
import statics from './statics';
import errors from './errors';
import render from './render';

export default (app, databaseUrl, env) => {
    if (env === 'development') {
        require('./webpack-dev-server')(app);
    }
    logger(app);
    render(app);
    statics(app);
    api(app);
    bodyparser(app);
    session(app, databaseUrl);
    views(app);
    statics(app);
    errors(app)
}