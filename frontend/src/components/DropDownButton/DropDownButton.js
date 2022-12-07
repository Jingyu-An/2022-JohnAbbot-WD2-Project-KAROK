import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './DropDownButton.css'
import {useDispatch} from "react-redux";
import {deletePost} from "../../Actions/postAction";

const DropDownButton = (props) => {
  
  const dispatch = useDispatch();
  
  const deletePostHandler = () => {
    if (props.user._id === props.data.userId) {
      console.log(props.data._id)
      // dispatch(deletePost(props.data._id))
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