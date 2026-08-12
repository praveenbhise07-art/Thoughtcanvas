import axios from 'axios';

// Express backend API base URL
const API = axios.create({
  baseURL: '/api'
});

// Explicitly append id parameter to /posts/
export const getPosts = () => API.get('/posts');
export const getPost = (id) => API.get(`/posts/${id}`);
export const createPost = (data) => API.post('/posts', data);
export const updatePost = (id, data) => API.put(`/posts/${id}`, data);
export const deletePost = (id) => API.delete(`/posts/${id}`);

// Comments
export const createComment = (data) => API.post('/comments', data);
export const addComment = (data) => API.post('/comments', data);
export const deleteComment = (id) => API.delete(`/comments/${id}`);

export default API;