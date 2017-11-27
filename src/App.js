import React, { Component } from 'react';

import Form from './components/Form/Form'
import List from './components/List/List'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      type: 'task',
      text: ''
    };

    this.addItem = this.addItem.bind(this);
    this.addType = this.addType.bind(this);
    this.addText = this.addText.bind(this);
    this.doneTask = this.doneTask.bind(this);
    this.delItem = this.delItem.bind(this);
    this.delCompletedTasks = this.delCompletedTasks.bind(this);
  }

  componentWillMount() {
    if (localStorage.getItem('items')) {
      const items = JSON.parse(localStorage.getItem('items'));
      
      this.setState({ items });
    };
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('items', JSON.stringify(this.state.items));
  };

  addItem(e) {
    const text = this.state.text.replace(/ +/g, ' ').replace(/\n+/g, '\n');

    if (!text.trim()) return this.setState({ text: '' });

    const item = {
      id: Date.now(),
      type: this.state.type,
      text: text,
      active: true
    };

    this.setState((prevState) => ({
      items: prevState.items.concat(item),
      text: ''
    }));
  }

  addType(e) {
    const type = (this.state.type === 'task') ? 'note' : 'task';

    this.setState({ type });
  }

  addText(e) {
    this.setState({ text: e.target.value });
  }

  doneTask(id) {
    const items = this.state.items;
    
    items.forEach((item, index, arr) => {
      if (item.id === id && item.active) {
        item.active = false;
      } else if (item.id === id && !item.active) {
        item.active = true;
      }
    });
    
    this.setState({ items });
  }

  delItem(id) {
    const items = this.state.items;

    items.forEach((item, index, arr) => {
      if (item.id === id) arr.splice(index, 1);
    });

    this.setState({ items });
  }

  delCompletedTasks(e) {
    const items = this.state.items.filter(item => item.active || item.type === 'note');

    this.setState({ items });
  }

  render() {
    return (
      <div className="App">
        <Form
          type={this.state.type}
          text={this.state.text}
          onSubmit={this.addItem}
          onClick={this.addType}
          onChange={this.addText}
        />
        <List
          items={this.state.items}
          onDoneTask={this.doneTask}
          onDelItem={this.delItem}
          onDelCompletedTasks={this.delCompletedTasks}
        />
      </div>
    );
  }
}

export default App;
