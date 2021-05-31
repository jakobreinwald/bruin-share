import express from 'express';

import { searchForPosts, getPosts, getPost, createPost, updatePost, likePost, deletePost, getSubjects, getClasses, getQuarters, getSpecificPosts, } from '../controllers/posts.js';


import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/subjects', getSubjects);
router.get('/:subjectId/classes', getClasses);
router.get('/:subjectId/:classId/quarters', getQuarters);
router.get('/:subjectId/:classId/:quarterId', getSpecificPosts);
router.get('/search', searchForPosts);

router.get('/', getPosts);
router.post('/', auth, createPost);
router.get('/:id', getPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;