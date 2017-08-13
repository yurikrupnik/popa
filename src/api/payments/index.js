import express from 'express';
import { findList, CREATE, UPDATE, deleteByIds } from './controller';
import { url } from './config';

const router = express.Router();

router.get(url, findList);
router.post(url, CREATE);
router.post(`${url}/:id`, UPDATE);
router.delete(url, deleteByIds);

export default router;
