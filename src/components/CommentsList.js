import React from 'react';
import { connect } from 'react-redux';
import CommentListItem from './CommentListItem';
import selectComments from '../selectors/comments';

export const CommentList = (props) => (
  <div className="object-center-space__filters">
    {
      props.comments.length === 0 ? (
        <p>No Comments</p>
      ) : (
          props.comments.map((comment) => {
            return <CommentListItem key={comment.id} {...comment} />;
          })
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    comments: selectComments(state.comments, state.filters)
  };
};

export default connect(mapStateToProps)(CommentList);
