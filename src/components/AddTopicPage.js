import React from 'react';
import { connect } from 'react-redux';
import TopicForm from './TopicForm';
import { startAddTopic } from '../actions/topics';

export class AddTopicPage extends React.Component {
  onSubmit = (topic) => {
    this.props.startAddTopic(topic);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1 className="center-spread">Add Topic</h1>
        <TopicForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddTopic: (topic) => dispatch(startAddTopic(topic))
});

export default connect(undefined, mapDispatchToProps)(AddTopicPage);
