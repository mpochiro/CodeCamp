// Comments Reducer

const commentsReducerDefaultState = [];

export default (state = commentsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        action.comment
      ];
    case 'REMOVE_COMMENT':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_COMMENT':
      return state.map((comment) => {
        if (comment.id === action.id) {
          return {
            ...comment,
            ...action.updates
          };
        } else {
          return comment;
        };
      });
      case 'SET_COMMENTS':
      return action.comments;
    default:
      return state;
  }
};
