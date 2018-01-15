import React from 'react';
import TopicListComments from './TopicListComments';
import CommentsList from './CommentsList';

const PublicTopicPage = () => (
  <div>
    <div className="texture">
    <h1 className="object-center-space__filters">Existing Topics</h1>
    <TopicListComments />
    </div>
    <div className="footnote">
    <h1 className="center-spread">Footnotes Section</h1>

    <CommentsList />
    </div>

  </div>
);

export default PublicTopicPage;
