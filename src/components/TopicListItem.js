import React from 'react';
import { Link } from 'react-router-dom';
import TopicForm from './TopicForm';
import moment from 'moment';
import numeral from 'numeral';

const TopicListItem = ({ id, description, createdAt, note }) => (
  <div className="borders">
    <Link to={`/edit/${id}`}>
      <p>{description}</p>
    </Link>
    <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
    <Link to={`/edit/${id}`}>
      </Link>
      <p>{note}</p>
      <Link to={`/make/comment`}>Add Footnote</Link>
  </div>

);

export default TopicListItem;

//I wanted to have this as a huge block for the links becasue you never know how long the entry will be
