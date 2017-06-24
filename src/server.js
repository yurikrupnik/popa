import http from 'http'
import app from './app';
import './services/server/db'; // connect to mongo
// import connect from './services/node/socket/server';

let server = http.Server(app);
// connect(server);

export default server;