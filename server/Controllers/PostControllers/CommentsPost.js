import PostModel from "../../Models/postModel.js";

// Add Comments
export const getCommentPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await PostModel.findById(id);
    if (post) {
      const comments = post.comments;
      res.status(200).json(comments);
    } else {
      res.status(404).json("Comments not found");
    }
    
  } catch (err) {
    res.status(500).json(err);
  }
}

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
    res.status(200).json("Comments added");
    
  } catch (err) {
    res.status(500).json(err);
  }
}

// Delete Comments
export const deleteCommentPost = async (req, res) => {
  const postId = req.params.id;
  const comId = req.params.comId;
  const {userId} = req.body;
  console.log('delete comment post')
  console.log(postId)
  console.log(comId)
  console.log(userId)
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
    res.status(200).json("Comments deleted");
    
  } catch (err) {
    res.status(500).json(err);
  }
}
