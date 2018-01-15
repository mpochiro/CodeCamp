import React from 'react';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';

const CommentListItem = ({ id, opinion }) => (
  <div className="object-center-space__filters">
    <div className="linkColor">
    <Link to={`/redo/${id}`}>
      <p>{ opinion }</p>
    </Link>
    </div>
  </div>
);

export default CommentListItem;
