import React, {useEffect} from 'react';
import './Posts.css';
import Post from '../Post/Post';
import {useDispatch, useSelector} from "react-redux";
import {deletePost, getTimelinePosts} from "../../Actions/postAction";

const Posts = (props) => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.authReducer.authData);
  const {loading} = useSelector((state) => state.postReducer);
  
  useEffect(() => {
    dispatch(getTimelinePosts(user._id))
  }, []);
  
  const deletePostHandler = (postId, event) => {
    event.preventDefault();
  
    dispatch(deletePost(postId));
    props.setCurrentPost(props.currentPost.filter(post => post.postId !== postId));
  };
  
  return (
    <div className="Posts">
      {loading ? "Fetching posts..." :
        props.currentPost.map((post, id) => {
          return <Post deletePost={deletePostHandler} key={id} data={post} id={id}/>
        })}
    </div>
  )
}
export default Posts;