import moment from 'moment';
import TopicForm from '../components/TopicForm';

// Get visible expenses

export default (topics, { text, sortBy, startDate, endDate, note }) => {
  return topics.filter((topic) => {
    const createdAtMoment = moment(topic.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = topic.description.toLowerCase().includes(text.toLowerCase()) || topic.note.includes(text.toLowerCase());


    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
