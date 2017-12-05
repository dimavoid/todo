export const addTask = (text) => {
  return {
    type: 'ADD_TASK',
    payload: {
      id: Date.now(),
      text: text,
      completed: false
    }
  };
};

export const addNote = (text) => {
  return {
    type: 'ADD_NOTE',
    payload: {
      id: Date.now(),
      text: text
    }
  };
};

export const toggleTask = (id) => {
  return {
    type: 'TOGGLE_TASK',
    payload: id
  }
};

export const delTask = (id) => {
  return {
    type: 'DEL_TASK',
    payload: id
  };
};

export const delNote = (id) => {
  return {
    type: 'DEL_NOTE',
    payload: id
  };
};

export const toggleForm = (type) => {
  return {
    type: 'TOGGLE_FORM',
    payload: type
  };
};

export const addText = (text) => {
  return {
    type: 'ADD_TEXT',
    payload: text
  };
};

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    payload: filter
  }
};

export const delCompleted = () => {
  return {
    type: 'DEL_COMPLETED',
    // payload: filter
  }
};