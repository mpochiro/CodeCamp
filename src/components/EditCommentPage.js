import React from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import { startEditComment, startRemoveComment } from '../actions/comments';

export class EditCommentPage extends React.Component {
  onSubmit = (comment) => {
    console.trace(comment);
    this.props.startEditComment(this.props.comment.id, comment);
    this.props.history.push('/topics');

  };
  onRemove = () => {
    this.props.startRemoveComment({ id: this.props.comment.id });
    this.props.history.push('/topics');
  };
  render() {
    return (
      <div>
        <h1>Edit your Comments here!!</h1>
        <CommentForm
          comment={this.props.comment}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  comment: state.comments.find((comment) => comment.id === props.match.params.id)
 });

const mapDispatchToProps = (dispatch, props) => ({
  startEditComment: (id, comment) => dispatch(startEditComment(id, comment)),
  startRemoveComment: (data) => dispatch(startRemoveComment(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCommentPage);
