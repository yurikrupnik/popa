let path = require('path');

const SRC_ROOT =  path.join(__dirname, '/..', 'src');
const DIST_ROOT = path.join(__dirname, '/..', 'dist');

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 4000;
const ip = process.env.IP || '0.0.0.0' || 'localhost';
const host = process.env.WEBSITE_HOSTNAME || `http://${ip}:${port}`;
const databaseUrl = process.env.DATABASE_URL ||'mongodb://localhost/popa';
const apiPrefix = '/api';
const apiVersion = '/v1';


module.exports = {
    SRC_ROOT: SRC_ROOT,
    DIST_ROOT: DIST_ROOT,
    env: env,
    port: port,
    ip: ip,
    host: host,
    databaseUrl: databaseUrl,
    apiPrefix: apiPrefix,
    apiVersion: apiVersion
};