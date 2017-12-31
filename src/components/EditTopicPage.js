import React from 'react';
import { connect } from 'react-redux';
import TopicForm from './TopicForm';
import { startEditTopic, startRemoveTopic } from '../actions/topics';

export class EditTopicPage extends React.Component {
  onSubmit = (topic) => {
    this.props.startEditTopic(this.props.topic.id, topic);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveTopic({ id: this.props.topic.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <TopicForm
          topic={this.props.topic}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.topics.find((topic) => topic.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditTopic: (id, topic) => dispatch(startEditTopic(id, topic)),
  startRemoveTopic: (data) => dispatch(startRemoveTopic(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTopicPage);
