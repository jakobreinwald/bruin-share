import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const fetchPosts = () => API.get(`/posts`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?tags=${searchQuery}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const getSubjects = () => API.get(`/posts/subjects`);
export const getClasses = (subjectId) => API.get(`/posts/${subjectId}/classes`);
export const getQuarters = (subjectId, classId) => API.get(`/posts/${subjectId}/${classId}/quarters`);
export const getSpecificPosts = (subjectId, classId, quarterId) => API.get(`/posts/${subjectId}/${classId}/${quarterId}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);