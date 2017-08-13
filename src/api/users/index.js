import express from 'express';
import { getUsers, getUserById, updateUser, saveUser, deleteUser } from './controller';

const router = express.Router();
const url = '/users';

router.get(url, getUsers);
router.get(`${url}/:id`, getUserById);
router.post(url, saveUser);
router.put(url, updateUser);
router.delete(url, deleteUser);

export default router;
