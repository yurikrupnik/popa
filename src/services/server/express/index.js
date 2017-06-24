
import logger from './logger';
import api from './api';
import bodyparser from './body-parser';
import session from './session';
import views from './views';
import statics from './statics';
import errors from './errors';
import render from './render';

export default (app, databaseUrl, env) => {
    logger(app);
    statics(app);
    api(app);
    bodyparser(app);
    session(app, databaseUrl);
    views(app);
    statics(app);
    render(app);
    if (env === 'development') {
        require('./webpack-dev-server')(app);
    }
    errors(app)
}