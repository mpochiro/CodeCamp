import React from 'react';
import TopicListComments from './TopicListComments';
import CommentsList from './CommentsList';

const PublicTopicPage = () => (
  <div>
    <h1>Comment Section</h1>
    <TopicListComments />
    <h1 className="center-spread">Comments Section</h1>

    <CommentsList />


  </div>
);

export default PublicTopicPage;
