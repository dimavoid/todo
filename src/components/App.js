import React, { Component } from 'react';

import FormContainers from '../containers/FormContainers';
import ListContainers from '../containers/ListContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormContainers />
        <ListContainers />
      </div>
    );
  }
}

export default App;
