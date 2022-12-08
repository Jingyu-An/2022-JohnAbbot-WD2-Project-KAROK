import React, {useState} from 'react'
import PostShare from '../PostShare/PostShare'
import './PostSide.css'
import Posts from '../Posts/Posts'
import {useSelector} from "react-redux";
const PostSide = () => {
  
  const {posts} = useSelector((state) => state.postReducer);
  const [currentPost, setCurrentPost] = useState(posts);
  
  // matching posts from db
  let postsLength = 0;
  posts.map((post) => postsLength += post.comments.length);
  currentPost.map((post) => postsLength -= post.comments.length);
  
  if (postsLength) {
    setCurrentPost(posts);
  }
  
  return (
   <div className="PostSide">
       <PostShare currentPost={currentPost} setCurrentPost={setCurrentPost}/>
       <Posts currentPost={currentPost} setCurrentPost={setCurrentPost}/>
   </div>
  )
}

export default PostSide