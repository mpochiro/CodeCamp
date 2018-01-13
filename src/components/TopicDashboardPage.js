import React from 'react';
import TopicList from './TopicList';
import TopicListFilters from './TopicListFilters';

const TopicDashboardPage = () => (
  <div>
    <TopicListFilters  className="float-right"/>
    <TopicList />
  </div>
);

export default TopicDashboardPage;
