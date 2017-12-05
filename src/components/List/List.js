import React from 'react';

import Task from '../Task/Task';
import Note from '../Note/Note';
import Filter from '../Filter/Filter'

import './List.css';

class List extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    const tasks = JSON.stringify(this.props.tasks);
    const notes = JSON.stringify(this.props.notes);

    localStorage.setItem('tasks', tasks);
    localStorage.setItem('notes', notes);
  }

  delItem = (e) => {
    const id = e.target.parentElement.id;
    const tasks = this.props.tasks;
    const notes = this.props.notes;

    tasks.forEach((task) => {
      if (task.id === +id) {
        return this.props.delTask(id);
      } 
    });

    notes.forEach((note) => {
      if (note.id === +id) {
        return this.props.delNote(id);
      } 
    });
  }

  toggleTask = (e) => {
    const id = e.target.parentElement.id;

    this.props.toggleTask(id);
  }

  setFilter = (e) => {
    this.props.setFilter(e.target.id);
  }

  delCompleted = (e) => {
    this.props.delCompleted();
  }

  render() {
    const tasks = this.props.visibleTasks.map((task, index) => {
      return (
        <Task
          id={task.id}
          text={task.text}
          completed={task.completed}
          onToggle={this.toggleTask}
          onDel={this.delItem}
          key={index}
        />
      );
    });

    const notes = this.props.notes.map((note, index) => {
      return (
        <Note
          id={note.id}
          text={note.text}
          onDel={this.delItem}
          key={index}
        />
      );
    });

    const classDelCompleted = (this.props.tasks.filter(t => t.completed).length) ? '' : 'List__del-completed--disabled';

    return (
      <section className="List">
        <div className="List__tasks">
          <h2>Tasks</h2>
          { (tasks.length) ? tasks : <h3 className="List__empty">None tasks</h3> }

          <div className="List__wrapper">
            <Filter
              filter={this.props.filter}
              setFilter={this.setFilter}
              delCompleted={this.delCompleted}
            />
            <button
              className={`List__del-completed ${classDelCompleted}`}
              onClick={this.delCompleted}
            >Clear</button>
          </div>
        </div>
        
        <div className="List__notes">
          <h2>Notes</h2>
          { (notes.length) ? notes : <h3 className="List__empty">None notes</h3> }
        </div>
      </section>
    );
  }
}

export default List;