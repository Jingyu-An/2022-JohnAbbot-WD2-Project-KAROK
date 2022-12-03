import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";


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
  const { userId } = req.body;
  
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
  const { userId } = req.body;
  
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
