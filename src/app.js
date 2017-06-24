import express from 'express';
import expressMiddlewares from './services/server/express';
let app = express();
import {SRC_ROOT, DIST_ROOT, databaseUrl, env} from './config';

expressMiddlewares(app, SRC_ROOT, DIST_ROOT, databaseUrl, env);

app.get('/', function (req, res, next) {
    res.send('<html><head></head><body><div id="root"></div><script src="main.js"></script></body></html>');
});
export default app;