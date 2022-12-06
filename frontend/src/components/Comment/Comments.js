import React from 'react';

import './Comments.css'
import {UilEnter} from "@iconscout/react-unicons";

const Comments = () => {
  return (
    <div className="Comments">
      <div className="Comment">
        <input type="text" placeholder='Comments...'/>
        <div className="s-icon">
          <UilEnter />
        </div>
      </div>
    </div>
  );
};

export default Comments;