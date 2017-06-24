import express from 'express';

export default (app, dist_root) => {
    app.use(express.static('dist'));
}