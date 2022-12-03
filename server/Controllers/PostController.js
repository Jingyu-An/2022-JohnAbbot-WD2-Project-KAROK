import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";
import UserModel from "../Models/userModel.js";


// Create
export const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);
  
  try {
    await newPost.save();
    res.status(200).json("Post created!!");
  } catch (err) {
    res.status(500).json(err)
  }
}

// Get
export const getPost = async (req, res) => {
  const id = req.params.id;
  
  try {
    const post = await PostModel.findById(id);
    res.status(200).json(post)
    
  } catch (err) {
    res.status(500).json(err);
    
  }
}

// Update
export const updatePost = async (req, res) => {
  const id = req.params.id;
  const {userId} = req.body;
  
  try {
    const post = await PostModel.findById(id);
    if (post.userId === userId) {
      await post.updateOne({$set: req.body});
      res.status(200).json("Post Updated");
      
    } else {
      res.status(403).json("Action forbidden");
      
    }
    
  } catch (err) {
    res.status(500).json(err);
    
  }
}

// Delete
export const deletePost = async (req, res) => {
  const id = req.params.id;
  const {userId} = req.body;
  
  try {
    const post = await PostModel.findById(id);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json("Post deleted successfully");
      
    } else {
      res.status(403).json("Action forbidden");
    }
    
  } catch (err) {
    res.status(500).json(err);
    
  }
}

// Like/Dislike
export const likePost = async (req, res) => {
  const id = req.params.id;
  const {userId} = req.body;
  
  try {
    const post = await PostModel.findById(id);
    if (!post.likes.includes(userId)) {
      await post.updateOne({
        $push: {likes: userId}
      });
      res.status(200).json("Post liked");
    } else {
      await post.updateOne({
        $pull: {likes: userId}
      });
      res.status(200).json("Post unliked");
    }
    
  } catch (err) {
    res.status(500).json(err);
  }
}

// Get Timeline Post
export const getTimelinePosts = async (req, res) => {
  const id = req.params.id;
  
  try {
    const currentUserPosts = await PostModel.find({userId: id});
    const followingPosts = await UserModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        }
      },
      {
        $lookup: {
          from        : "posts",
          localField  : "following",
          foreignField: "userId",
          as          : "followingPosts"
        }
      },
      {
        $project: {
          followingPosts: 1,
          _id           : 0
        }
      }
    ]);
    
    res.status(200)
    .json(currentUserPosts.concat(...followingPosts[0].followingPosts))
    .sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    
  } catch (err) {
    res.status(500).json(err);
  }
}