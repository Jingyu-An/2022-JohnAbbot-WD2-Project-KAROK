import PostModel from "../../Models/postModel.js";

// Add Comments
export const addCommentPost = async (req, res) => {
  const id = req.params.id;
  const {userId, comments} = req.body;
  
  try {
    const post = await PostModel.findById(id);
    await post.updateOne({
      $push: {
        comments: {
          userId : userId,
          comment: comments
        }
      }
    });
    res.status(200).json("Comment added");
    
  } catch (err) {
    res.status(500).json(err);
  }
}

// Delete Comment
export const deleteCommentPost = async (req, res) => {
  const postId = req.params.id;
  const comId = req.params.comId;
  const {userId} = req.body;
  
  try {
    const post = await PostModel.findById(postId);
    await post.updateOne({
      $pull: {
        comments: {
          _id   : comId,
          userId: userId,
        }
      }
    });
    res.status(200).json("Comment deleted");
    
  } catch (err) {
    res.status(500).json(err);
  }
}