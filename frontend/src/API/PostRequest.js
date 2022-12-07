import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:5002"})

export const updatePost = (id, data) => API.put(`/posts/${id}`, data)
export const deletePost = (id) => API.delete(`/posts/${id}`)

export const getTimelinePosts= (id)=> API.get(`/posts/${id}/timeline`);

export const likePost = (id, userId)=> API.put(`/posts/${id}/like`, {
  userId: userId
})

// Comment
export const commentPost = (id, userId, comment)=> API.put(`/posts/${id}/comment`, {
  userId: userId,
  comments: comment,
})

export const getCommentsPost = (id)=> API.get(`/posts/${id}/comment`)

export const deleteCommentPost = (id, commentId, userId) =>
  API.put(`/posts/${id}/comment/${commentId}/delete`,
    {userId: userId }
  );
