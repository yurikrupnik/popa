import express from 'express';
import expressMiddlewares from './services/server/express';
let app = express();
import {databaseUrl, env} from './config';

expressMiddlewares(app, databaseUrl, env);

app.get('/', function (req, res, next) {
    res.render('index');
});
export default app;