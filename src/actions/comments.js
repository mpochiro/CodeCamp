import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_COMMENT
export const addComment = (comment) => ({
  type: 'ADD_COMMENT',
  comment
});

export const startAddComment = (commentData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
       opinion = ''
    } = commentData;
    const comment = { opinion };
    return database.ref(`users/${uid}/comment`).push(comment).then((ref) => {
      dispatch(addComment({
        id: ref.key,
        ...comment
      }));
    });
  };
};

// REMOVE_COMMENT
export const removeComment = ({ id } = {}) => ({
  type: 'REMOVE_COMMENT',
  id
});

export const startRemoveComment = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/comment/${id}`).remove().then(() => {
      dispatch(removeComment({ id }));
    });
  };
};

// EDIT_COMMENT
export const editComment = (id, updates) => ({
  type: 'EDIT_COMMENT',
  id,
  updates
});

export const startEditComment = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/comment/${id}`).update(updates).then(() => {
      dispatch(editComment(id, updates));
    });
  };
};

// SET_COMMENTS
export const setComments = (comments) => ({
  type: 'SET_COMMENTS',
  comments
});

export const startSetComments = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/comment`).once('value').then((snapshot) => {
      const comments = [];

      snapshot.forEach((childSnapshot) => {
        comments.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setComments(comments));
    });
  };
};
