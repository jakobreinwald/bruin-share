import * as api from '../api';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_SUBJECTS, FETCH_CLASSES, FETCH_QUARTERS, FETCH_SPECIFIC, CLEAR_POSTS, CLEAR_QUARTERS } from '../constants/actionTypes';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: LIKE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getSubjects = () => async (dispatch) => {
    try {
        const { data } = await api.getSubjects();
        dispatch({ type: FETCH_SUBJECTS, payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const getClasses = (subjectId) => async (dispatch) => {
    try {
        const { data } = await api.getClasses(subjectId);
        console.log(data);
        dispatch({ type: FETCH_CLASSES, payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const getQuarters = (subjectId, classId) => async (dispatch) => {
    console.log(subjectId, classId);
    try {
        const { data } = await api.getQuarters(subjectId, classId);
        console.log(data);
        dispatch({ type: FETCH_QUARTERS, payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const getSpecificPosts = (subjectId, classId, quarterId) => async (dispatch) => {
    try {
        const { data } = await api.getSpecificPosts(subjectId, classId, quarterId);
        dispatch({ type: FETCH_SPECIFIC, payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const clearPosts = () => async (dispatch) => {
    try {
        dispatch({ type: CLEAR_POSTS });
    } catch (error) {
        console.log(error.message)
    }
}

export const clearQuarters = () => async (dispatch) => {
    try {
        dispatch({ type: CLEAR_QUARTERS });
    } catch (error) {
        console.log(error.message)
    }
}