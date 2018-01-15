import React from 'react';
import { connect } from 'react-redux';
import TopicForm from './TopicForm';
import { startEditTopic, startRemoveTopic } from '../actions/topics';

export class EditTopicPage extends React.Component {
  onSubmit = (topic) => {
    console.trace(topic);

    this.props.startEditTopic(this.props.topic.id, topic);
    this.props.history.push('/');

  };
  onRemove = () => {
    this.props.startRemoveTopic({ id: this.props.topic.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div className="texture">
        <h1>Edit your Topic here!</h1>

        <TopicForm
          topic={this.props.topic}
          onSubmit={this.onSubmit}
        />
        <button className="button" onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  topic: state.topics.find((topic) => topic.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditTopic: (id, topic) => dispatch(startEditTopic(id, topic)),
  startRemoveTopic: (data) => dispatch(startRemoveTopic(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTopicPage);
