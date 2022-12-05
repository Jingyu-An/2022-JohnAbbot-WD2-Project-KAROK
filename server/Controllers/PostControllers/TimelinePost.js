import PostModel from "../../Models/postModel.js";
import UserModel from "../../Models/userModel.js";
import mongoose from "mongoose";

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
