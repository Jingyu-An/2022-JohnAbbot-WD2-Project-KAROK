import React from 'react';

import './Comments.css'

const Comments = () => {
  return (
    <div className="Comments">
      <div className="Comment">
        <input type="text" placeholder='Comments...'/>
        <div className="s-icon">
          a
        </div>
      </div>
    </div>
  );
};

export default Comments;