import express from "express";
import {createPost, deletePost, getPost, updatePost} from "../Controllers/PostControllers/CRUDPost.js";
import {likePost} from "../Controllers/PostControllers/LikePost.js";
import {getTimelinePosts} from "../Controllers/PostControllers/TimelinePost.js";
import {addCommentPost, deleteCommentPost} from "../Controllers/PostControllers/CommentsPost.js";

const router = express.Router();

// CRUD Post
router.post('/', createPost);
router.get('/:id', getPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

// Like/Unlike
router.put('/:id/like', likePost);

// Comments Post
router.put('/:id/comment', addCommentPost);
router.put('/:id/comment/:comId/delete', deleteCommentPost);

// Timeline Post
router.get('/:id/timeline', getTimelinePosts);
export default router;