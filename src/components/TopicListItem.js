import React from 'react';
import { Link } from 'react-router-dom';
import TopicForm from './TopicForm';
import moment from 'moment';
import numeral from 'numeral';

const TopicListItem = ({ id, description, createdAt, note }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
    <Link to={`/edit/${id}`}>
      </Link>
      <p>{note}</p>
  </div>
);

export default TopicListItem;
