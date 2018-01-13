
import CommentForm from '../components/CommentForm';

// Get visible Comments

export default (comments, { opinion }) => {
  return comments.filter((comment) => {
    const textMatch = comment.opinion;

    return textMatch;
  })
};
