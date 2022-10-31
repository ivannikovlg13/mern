import { Router } from 'express';
import { createPost, getAll, getById } from '../controllers/posts.js';
import { checkAuth } from '../utils/checkAuth.js';
const router = new Router();

//Create Post
router.post('/', checkAuth, createPost);

//Get All Posts
router.get('/', getAll);

//Get Post  By Id
router.get('/:id', getById);

export default router;
