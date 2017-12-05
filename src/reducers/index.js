import { combineReducers } from 'redux';

const tasks = (state = [], action) => {
  const newState = [ ...state ];

  switch (action.type) {
    case 'ADD_TASK':
      return [ ...state, action.payload ];

    case 'TOGGLE_TASK':
      newState.forEach((item, i, arr) => {
        if (item.id === +action.payload) {
          item.completed = (item.completed) ? false : true; 
        }
      });
      return newState;

    case 'DEL_TASK':
      newState.forEach((item, i, arr) => {
        if (item.id === +action.payload) arr.splice(i, 1);
      });
      return newState;

    case 'DEL_COMPLETED':
      return state.filter((task) => !task.completed);

    default:
      return state;
  }
};

const notes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [ ...state, action.payload ];

    case 'DEL_NOTE':
      const newState = [ ...state ];
      const id = action.payload;
      newState.forEach((item, i, arr) => {
        if (item.id === +id) arr.splice(i, 1);
      });
      return newState;

    default:
      return state;
  }
};

const form = (state = { type: 'task', text: '' }, action) => {
  switch (action.type) {
    case 'ADD_TEXT':
      return { ...state, text: action.payload };

    case 'TOGGLE_FORM':
      return { ...state, type: action.payload };

    default:
      return state;
  }
};

const filter = (state = 'all', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload;

    default:
      return state;
  }
};

const reducer = combineReducers({
  tasks,
  notes,
  form,
  filter
});

export default reducer;