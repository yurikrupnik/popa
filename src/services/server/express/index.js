
import logger from './logger';
import api from './api';
import bodyparser from './body-parser';
import session from './session';
import views from './views';
import statics from './statics';
import errors from './errors';

export default (app, SRC_ROOT, DIST_ROOT, databaseUrl, env) => {
    logger(app);
    statics(app);
    api(app);
    bodyparser(app);
    session(app, databaseUrl);
    views(app, DIST_ROOT);
    statics(app, DIST_ROOT); // todo check why
    if (env === 'development') {
        require('./webpack-dev-server')(app);
    }
    errors(app)
}