import React, {useState} from 'react'
import PostShare from '../PostShare/PostShare'
import './PostSide.css'
import Posts from '../Posts/Posts'
import {useSelector} from "react-redux";
const PostSide = () => {
  
  const {posts} = useSelector((state) => state.postReducer);
  const [currentPost, setCurrentPost] = useState(posts);
  
  return (
   <div className="PostSide">
       <PostShare currentPost={currentPost} setCurrentPost={setCurrentPost}/>
       <Posts currentPost={currentPost} setCurrentPost={setCurrentPost}/>
   </div>
  )
}

export default PostSide