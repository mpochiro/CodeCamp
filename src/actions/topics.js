import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_TOPIC
export const addTopic = (topic) => ({
  type: 'ADD_TOPIC',
  topic
});

export const startAddTopic = (topicData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      createdAt = 0
    } = topicData;
    const topic = { description, note, createdAt };
    return database.ref(`users/${uid}/topic`).push(topic).then((ref) => {
      dispatch(addTopic({
        id: ref.key,
        ...topic
      }));
    });
  };
};

// REMOVE_TOPIC
export const removeTopic = ({ id } = {}) => ({
  type: 'REMOVE_TOPIC',
  id
});

export const startRemoveTopic = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/topic/${id}`).remove().then(() => {
      dispatch(removeTopic({ id }));
    });
  };
};

// EDIT_TOPIC
export const editTopic = (id, updates) => ({
  type: 'EDIT_TOPIC',
  id,
  updates
});

export const startEditTopic = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/topic/${id}`).update(updates).then(() => {
      dispatch(editTopic(id, updates));
    });
  };
};

// SET_TOPICS
export const setTopics = (topics) => ({
  type: 'SET_TOPICS',
  topics
});

export const startSetTopics = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/topic`).once('value').then((snapshot) => {
      const topics = [];

      snapshot.forEach((childSnapshot) => {
        topics.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setTopics(topics));
    });
  };
};
