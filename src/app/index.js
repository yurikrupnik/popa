import express from 'express';
import setters from './setters';
import logger from './logger';
import statics from './static';
import parser from './parser';
import render from './render';
import error from './error';

const app = express();
logger(app);
setters(app);
statics(app);
parser(app);
render(app);
error(app);

export default app;
