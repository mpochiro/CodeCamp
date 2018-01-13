import React from 'react';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';

const CommentListItem = ({ id, opinion }) => (
  <div className="object-center-space__filters">
    <Link to={`/redo/${id}`}>
      <p>{ opinion }</p>
    </Link>

  </div>
);

export default CommentListItem;
