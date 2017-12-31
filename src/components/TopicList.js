import React from 'react';
import { connect } from 'react-redux';
import TopicListItem from './TopicListItem';
import selectTopics from '../selectors/topics';

export const TopicList = (props) => (
  <div>
    {
      props.topics.length === 0 ? (
        <p>No Topics</p>
      ) : (
          props.topics.map((topic) => {
            return <TopicListItem key={topic.id} {...topic} />;
          })
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    topics: selectTopics(state.topics, state.filters)
  };
};

export default connect(mapStateToProps)(TopicList);
