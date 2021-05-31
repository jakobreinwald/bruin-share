import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags, subjectId, classId, year, quarter } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags, subjectId, classId, year, quarter })

    try {
        await newPostMessage.save();

        res.status(201); //.json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags, subjectId, classId, year, quarter } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, subjectId, classId, year, quarter, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if(!req.userId) return res.json({ message: "Unauthenticated."});

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    const index = posts.likes.findIndex((id) => id === String(req.userId));

    if(index === -1) {
        post.likes.push(req.userId);
    } else {
        post.likes = post.likes.filter((id) => id != String(req.userId));
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
    
    res.json(updatedPost);
}

export const getSubjects = async (req, res) => { 
    try {
        const subjects = await PostMessage.distinct('subjectId');
        res.status(200).json(subjects);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getClasses = async (req, res) => { 
    const { subjectId } = req.params;
    try {
        const classes = await PostMessage.distinct('classId', { subjectId: {$eq: `${subjectId}`}});
        res.status(200).json(classes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getQuarters = async (req, res) => { 
    const { subjectId } = req.params;
    const { classId } = req.params;
    try {
        const quarters = await PostMessage.distinct('yearQuarter', { classId: {$eq: `${classId}`}, subjectId: {$eq: `${subjectId}`}});
        res.status(200).json(quarters);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getSpecificPosts = async (req, res) => { 
    const { subjectId } = req.params;
    const { classId } = req.params;
    const { quarterId } = req.params;
    try {
        const posts = await PostMessage.find({
            'subjectId': `${subjectId}`,
            'classId': `${classId}`,
            'yearQuarter': `${quarterId}`,
        });
        
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const searchForPosts = async (req, res) => {
    const { tags } = req.query;
    try {
        const posts = await PostMessage.find({ tags: { $in: tags.split(',') } });
        res.status(200).json(posts);
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export default router;