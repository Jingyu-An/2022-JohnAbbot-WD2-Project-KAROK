import React, {useRef, useState} from 'react';

import './Comments.css'
import {UilEnter} from "@iconscout/react-unicons";
import {useDispatch, useSelector} from "react-redux";
import {commentPost} from "../../Actions/CommentAction";

const Comments = (props) => {
  
  const {user} = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
  
  const data = props.data;
  const comment = useRef();
  
  const summitHandler = (event) => {
    event.preventDefault();
    
    const newComment = {
      username: user.username,
      userId: user._id,
      comment: comment.current.value,
      commentId: Math.random().toString(16).slice(2),
    }
  
    if (comment.current.value) {
      dispatch(commentPost(data.postId, user.username, user._id, comment.current.value, newComment.commentId));
    }
    props.addCommentHandler(newComment);
    props.enableCommentHadler();
    comment.current.value = '';
  };
  
  return (
    <div className="Comments">
      <div className="Comment">
        <input
          type="text"
          placeholder='Comments...'
          ref={comment}
        />
        <div className="s-icon">
            <UilEnter onClick={summitHandler}/>
        </div>
      </div>
    </div>
  );
};

export default Comments;