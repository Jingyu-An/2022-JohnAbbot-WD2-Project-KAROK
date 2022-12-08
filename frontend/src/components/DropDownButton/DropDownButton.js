import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './DropDownButton.css'
import {useSelector} from "react-redux";

const DropDownButton = (props) => {
  
  const {user} = useSelector((state) => state.authReducer.authData);
  
  const deletePostHandler = (event) => {
    event.preventDefault();
    
    if (user._id === props.data.userId) {
      props.deletePost(props.data.postId, event);
    }
  }
  
  return (
    <Dropdown style={{margin: '0 0 0 auto'}}>
      <Dropdown.Toggle className='dropdown-btn' id="dropdown-basic">
        ...
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Update</Dropdown.Item>
        <Dropdown.Item onClick={deletePostHandler}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDownButton;