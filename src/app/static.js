import express from 'express';
import path from 'path';

export default app => app.use(express.static(path.resolve(__dirname, 'public')));
