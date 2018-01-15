import React from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import { startAddComment } from '../actions/comments';

export class AddCommentPage extends React.Component {
  onSubmit = (comment) => {
    this.props.startAddComment(comment);
    this.props.history.push('/topics');
  };
  render() {
    return (
      <div className="texture">
        <h1>Add Footnote</h1>
        <CommentForm 
          onSubmit={this.onSubmit} />

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddComment: (comment) => dispatch(startAddComment(comment))
});

export default connect(undefined, mapDispatchToProps)(AddCommentPage);
