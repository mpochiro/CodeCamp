// Expenses Reducer

const topicsReducerDefaultState = [];

export default (state = topicsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TOPIC':
      return [
        ...state,
        action.topic
      ];
    case 'REMOVE_TOPIC':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_TOPIC':
      return state.map((topic) => {
        if (topic.id === action.id) {
          return {
            ...topic,
            ...action.updates
          };
        } else {
          return topic;
        };
      });
      case 'SET_TOPICS':
      return action.topics;
    default:
      return state;
  }
};
