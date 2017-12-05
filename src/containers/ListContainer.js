import { connect } from 'react-redux';

import { toggleTask, delTask, delNote, setFilter, delCompleted } from '../actions/index';
import List from '../components/List/List';

const getTasks = (tasks) => {
  return tasks;
};

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case 'all':
      return tasks;

    case 'active':
      return tasks.filter((task) => !task.completed);

    case 'completed':
      return tasks.filter((task) => task.completed);

    default:
      return tasks;
  }
};

const getNotes = (notes) => {
  return notes;
};

const getFilter = (filter) => {
  return filter;
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    tasks: getTasks(state.tasks),
    visibleTasks: getVisibleTasks(state.tasks, state.filter),
    notes: getNotes(state.notes),
    filter: getFilter(state.filter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTask: (id) => {
      dispatch(toggleTask(id))
    },
    delTask: (id) => {
      dispatch(delTask(id))
    },
    delNote: (id) => {
      dispatch(delNote(id))
    },
    setFilter: (filter) => {
      dispatch(setFilter(filter))
    },
    delCompleted: () => {
      dispatch(delCompleted())
    }
  }
};

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);


export default ListContainer;