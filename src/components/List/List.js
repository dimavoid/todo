import React from 'react';

import Task from './Task/Task'
import Note from './Note/Note'
import Filter from './Filter/Filter';

import './List.css';

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'all'
    }
    
    this.onAllFilter = this.onAllFilter.bind(this);
    this.onActiveFilter = this.onActiveFilter.bind(this);
    this.onCompletedFilter = this.onCompletedFilter.bind(this);
    this.onDelCompleted = this.onDelCompleted.bind(this);
  }

  onAllFilter(e) {
    this.setState({ filter: 'all' });
  }

  onActiveFilter(e) {
    this.setState({ filter: 'active' });
  }

  onCompletedFilter(e) {
    this.setState({ filter: 'completed' });
  }

  onDelCompleted(e) {
    this.props.onDelCompletedTasks(e);
  }

  render() {
    const items = this.props.items;

    let tasks = items.filter(item => item.type === 'task');
    let notes = items.filter(item => item.type === 'note');

    switch (this.state.filter) {
      case 'all':
        break;

      case 'active':
        tasks = tasks.filter(task => task.active === true);
        break;

      case 'completed':
        tasks = tasks.filter(task => task.active === false);
        break;
    }

    tasks = (tasks.length) ? (
        tasks.map((item, index) => (
          <Task
            item={item}
            key={index}
            onDone={this.props.onDoneTask}
            onDel={this.props.onDelItem}
          />
        ))
      ) : (
        <h3 className="list-empty">None {(this.state.filter === 'all') ? null : this.state.filter} tasks</h3>
    );

    notes = (notes.length) ? (
        notes.map((item, index) => (
          <Note
            item={item}
            key={index}
            onDel={this.props.onDelItem}
          />
        ))
      ) : (
        <h3 className="list-empty">None notes</h3>
    );

    return (
      <section className="list">
        <section className="list-tasks">
          <h2 className="list-title">Tasks</h2>
          {tasks}
          <Filter
            filter={this.state.filter}
            onAll={this.onAllFilter}
            onActive={this.onActiveFilter}
            onCompleted={this.onCompletedFilter}
            onDelCompleted={this.onDelCompleted}
          />
        </section>
        <section className="list-notes">
          <h2 className="list-title">Notes</h2>
          {notes}
        </section>
      </section>
    );
  }
}