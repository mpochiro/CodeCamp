import React from 'react';
import TopicList from './TopicList';
import TopicListFilters from './TopicListFilters';

const TopicDashboardPage = () => (
  <div>
    <TopicListFilters />
    <TopicList />
  </div>
);

export default TopicDashboardPage;
