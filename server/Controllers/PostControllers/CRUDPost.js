import PostModel from "../../Models/postModel.js";
import UserModel from "../../Models/userModel.js";
import mongoose from "mongoose";

// Create
export const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);
  
  try {
    await newPost.save();
    res.status(200).json(newPost);
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
  console.log(id)
  try {
    const post = await PostModel.findOne({postId: id});
    const userId = post.userId;
    if (post) {
      await post.deleteOne();
  
      try {
        const currentUserPosts = await PostModel.find({userId: userId});
        const followingPosts = await UserModel.aggregate([
          {
            $match: {
              _id: new mongoose.Types.ObjectId(userId),
            }
          },
          {
            $lookup: {
              from        : "posts",
              localField  : "following",
              foreignField: "userId",
              as          : "followingPosts",
            }
          },
          {
            $project: {
              followingPosts: 1,
              _id           : 0,
            }
          },
        ]);
    
        res.status(200)
        .json(currentUserPosts.concat(...followingPosts[0].followingPosts)
        );
      } catch (err) {
        res.status(500).json(err);
      }
  
      // res.status(200).json("Post deleted successfully");
      
    } else {
      res.status(404).json("Post not founded");
    }
    
  } catch (err) {
    res.status(500).json(err);
    
  }
}
