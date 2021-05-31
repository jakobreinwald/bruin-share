import express from 'express';

import { getPosts, searchForPosts, createPost, updatePost, deletePost, likePost, getSubjects, getClasses, getQuarters, getSpecificPosts } from '../controllers/posts.js';

import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', getPosts);
router.get('/search', searchForPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

router.get('/subjects', getSubjects);
router.get('/:subjectId/classes', getClasses);
router.get('/:subjectId/:classId/quarters', getQuarters);
router.get('/:subjectId/:classId/:quarterId', getSpecificPosts);

export default router;