import { Router } from 'express';
import {
  createPost,
  getAll,
  getById,
  getMyPosts,
  removePost,
  updatePost,
  getAllComments,
} from '../controllers/posts.js';
import { checkAuth } from '../utils/checkAuth.js';

const router = new Router();

//Create Post
router.post('/', checkAuth, createPost);

//Get All Posts
router.get('/', getAll);

//Get Post  By Id
router.get('/:id', getById);

//Get My Posts
router.get('/user/me', checkAuth, getMyPosts);

//Delete Post
router.delete('/:id', checkAuth, removePost);

//Update Post
router.put('/:id', checkAuth, updatePost);

//Get All Comments
router.get('/comments/:id', checkAuth, getAllComments);

export default router;
