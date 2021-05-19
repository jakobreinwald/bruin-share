import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost, getSubjects, getClasses, getQuarters, getSpecificPosts, } from '../controllers/posts.js';

const router = express.Router();

router.get('/subjects', getSubjects);
router.get('/:subjectId/classes', getClasses);
router.get('/:subjectId/:classId/quarters', getQuarters);
router.get('/:subjectId/:classId/:quarterId', getSpecificPosts);

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;