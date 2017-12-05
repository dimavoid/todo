import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers';
import App from './components/App';

import './index.css';



// Redux store
const initialStore = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [ { id: 246, text: 'I\'m task.', completed: false } ],
  notes: JSON.parse(localStorage.getItem('notes')) || [ { id: 357, text: 'I\'m note.' } ],
};

const store = createStore(reducer, initialStore);



ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);
