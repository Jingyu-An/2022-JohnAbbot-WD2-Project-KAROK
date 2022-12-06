import React, {useState} from 'react';
import './Post.css';
import Comment from '../../img/comment.png';
//import Share from '../../img/share.png';
import Heart from '../../img/like.png';
import NotLike from '../../img/notlike.png';
import Comments from "../Comment/Comments";
import {useSelector} from "react-redux";
import {likePost} from "../../API/PostRequest";

const Post = ({data}) => {
  
  const {user} = useSelector((state) => state.authReducer.authData);
  
  const [liked, setLiked] = useState(data.likes.includes(user.id));
  const [likes, setLikes] = useState(data.likes.length);
  
  const likeHandler = () => {
    setLiked((prev) => !prev);
    likePost(data._id, user._id);
    liked ? setLikes((prev) => prev - 1)
      : setLikes((prev) => prev + 1);
  };
  
  const [enableComment, setEnableComment] = useState(false);
  
  const enableCommentHandler = () => {
    if (enableComment) {
      setEnableComment(false);
    } else {
      setEnableComment(true);
    }
  }
  
  return (
    <div className='Post'>
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image
          : ''}
        alt=""
      />
      <div className='postReact'>
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{cursor: "pointer"}}
          onClick={likeHandler}
        />
        <img
          src={Comment}
          alt=""
          style={{cursor: "pointer"}}
          onClick={enableCommentHandler}
        />
        {/*<img src = {Share} alt = ""/>*/}
      </div>
      <span style={{color: "var(--gray)", fontSize: '12px'}}>{likes}likes</span>
      <div className='detail'>
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
      </div>
      <div>
        {enableComment ? <Comments/> : ''}
      </div>
    </div>
  )
}

export default Post;